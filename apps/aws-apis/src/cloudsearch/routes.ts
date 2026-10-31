import { createRoute, z } from '@hono/zod-openapi'

const FieldNameSchema = z
  .string()
  .regex(/[a-z][a-z0-9_]*/)
  .min(1)
  .max(64)
  .openapi({
    description:
      "<p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>",
  })
  .openapi('FieldName')

const FieldNameListSchema = z
  .array(FieldNameSchema)
  .openapi({ description: 'A list of field names.' })
  .openapi('FieldNameList')

const BuildSuggestersResponseSchema = z
  .object({ FieldNames: FieldNameListSchema.exactOptional() })
  .openapi({
    description:
      'The result of a <code>BuildSuggester</code> request. Contains a list of the fields used for suggestions.',
    required: [],
  })
  .openapi('BuildSuggestersResponse')

const BaseExceptionSchema = z.any().openapi('BaseException')

const InternalExceptionSchema = z.any().openapi('InternalException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const DomainIdSchema = z
  .string()
  .min(1)
  .max(64)
  .openapi({ description: 'An internally generated unique identifier for a domain.' })
  .openapi('DomainId')

const DomainNameSchema = z
  .string()
  .regex(/[a-z][a-z0-9\-]+/)
  .min(3)
  .max(28)
  .openapi({
    description:
      'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
  })
  .openapi('DomainName')

const ARNSchema = z
  .string()
  .openapi({
    description:
      'The Amazon Resource Name (ARN) of the search domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.',
  })
  .openapi('ARN')

const BooleanSchema = z.boolean().openapi('Boolean')

const ServiceUrlSchema = z
  .string()
  .openapi({
    description:
      'The endpoint to which service requests can be submitted. For example, <code>search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com</code> or <code>doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com</code>.',
  })
  .openapi('ServiceUrl')

const ServiceEndpointSchema = z
  .object({ Endpoint: ServiceUrlSchema.exactOptional() })
  .openapi({
    description: 'The endpoint to which service requests can be submitted.',
    required: [],
  })
  .openapi('ServiceEndpoint')

const SearchInstanceTypeSchema = z
  .string()
  .openapi({
    description:
      'The instance type (such as <code>search.m1.small</code>) that is being used to process search requests.',
  })
  .openapi('SearchInstanceType')

const PartitionCountSchema = z
  .int()
  .min(1)
  .openapi({ description: "The number of partitions used to hold the domain's index." })
  .openapi('PartitionCount')

const InstanceCountSchema = z.int().min(1).openapi('InstanceCount')

const MaximumReplicationCountSchema = z.int().min(1).openapi('MaximumReplicationCount')

const MaximumPartitionCountSchema = z.int().min(1).openapi('MaximumPartitionCount')

const LimitsSchema = z
  .object({
    MaximumReplicationCount: MaximumReplicationCountSchema,
    MaximumPartitionCount: MaximumPartitionCountSchema,
  })
  .openapi({ required: ['MaximumReplicationCount', 'MaximumPartitionCount'] })
  .openapi('Limits')

const DomainStatusSchema = z
  .object({
    DomainId: DomainIdSchema,
    DomainName: DomainNameSchema,
    ARN: ARNSchema.exactOptional(),
    Created: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'True if the search domain is created. It can take several minutes to initialize a domain when <a>CreateDomain</a> is called. Newly created search domains are returned from <a>DescribeDomains</a> with a false value for Created until domain creation is complete.',
        }),
    ).exactOptional(),
    Deleted: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'True if the search domain has been deleted. The system must clean up resources dedicated to the search domain when <a>DeleteDomain</a> is called. Newly deleted search domains are returned from <a>DescribeDomains</a> with a true value for IsDeleted for several minutes until resource cleanup is complete.',
        }),
    ).exactOptional(),
    DocService: ServiceEndpointSchema.and(
      z
        .any()
        .openapi({
          description: 'The service endpoint for updating documents in a search domain.',
        }),
    ).exactOptional(),
    SearchService: ServiceEndpointSchema.and(
      z
        .any()
        .openapi({
          description: 'The service endpoint for requesting search results from a search domain.',
        }),
    ).exactOptional(),
    RequiresIndexDocuments: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'True if <a>IndexDocuments</a> needs to be called to activate the current domain configuration.',
        }),
    ),
    Processing: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'True if processing is being done to activate the current domain configuration.',
        }),
    ).exactOptional(),
    SearchInstanceType: SearchInstanceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The instance type that is being used to process search requests.',
        }),
    ).exactOptional(),
    SearchPartitionCount: PartitionCountSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of partitions across which the search index is spread.',
        }),
    ).exactOptional(),
    SearchInstanceCount: InstanceCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of search instances that are available to process search requests.',
        }),
    ).exactOptional(),
    Limits: LimitsSchema.exactOptional(),
  })
  .openapi({
    required: ['DomainId', 'DomainName', 'RequiresIndexDocuments'],
    description: 'The current status of the search domain.',
  })
  .openapi('DomainStatus')

const CreateDomainResponseSchema = z
  .object({ DomainStatus: DomainStatusSchema.exactOptional() })
  .openapi({
    description:
      'The result of a <code>CreateDomainRequest</code>. Contains the status of a newly created domain.',
    required: [],
  })
  .openapi('CreateDomainResponse')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const StandardNameSchema = z
  .string()
  .regex(/[a-z][a-z0-9_]*/)
  .min(1)
  .max(64)
  .openapi({
    description:
      'Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).',
  })
  .openapi('StandardName')

const AnalysisSchemeLanguageSchema = z
  .enum([
    'ar',
    'bg',
    'ca',
    'cs',
    'da',
    'de',
    'el',
    'en',
    'es',
    'eu',
    'fa',
    'fi',
    'fr',
    'ga',
    'gl',
    'he',
    'hi',
    'hu',
    'hy',
    'id',
    'it',
    'ja',
    'ko',
    'lv',
    'mul',
    'nl',
    'no',
    'pt',
    'ro',
    'ru',
    'sv',
    'th',
    'tr',
    'zh-Hans',
    'zh-Hant',
  ])
  .openapi({
    description:
      'An <a href="http://tools.ietf.org/html/rfc4646" target="_blank">IETF RFC 4646</a> language code or <code>mul</code> for multiple languages.',
  })
  .openapi('AnalysisSchemeLanguage')

const StringSchema = z.string().openapi('String')

const AlgorithmicStemmingSchema = z
  .enum(['none', 'minimal', 'light', 'full'])
  .openapi('AlgorithmicStemming')

const AnalysisOptionsSchema = z
  .object({
    Synonyms: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON object that defines synonym groups and aliases. A synonym group is an array of arrays, where each sub-array is a group of terms where each term in the group is considered a synonym of every other term in the group. The aliases value is an object that contains a collection of string:value pairs where the string specifies a term and the array of values specifies each of the aliases for that term. An alias is considered a synonym of the specified term, but the term is not considered a synonym of the alias. For more information about specifying synonyms, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html#synonyms">Synonyms</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
        }),
    ).exactOptional(),
    Stopwords: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON array of terms to ignore during indexing and searching. For example, <code>["a", "an", "the", "of"]</code>. The stopwords dictionary must explicitly list each word you want to ignore. Wildcards and regular expressions are not supported. ',
        }),
    ).exactOptional(),
    StemmingDictionary: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON object that contains a collection of string:value pairs that each map a term to its stem. For example, <code>{"term1": "stem1", "term2": "stem2", "term3": "stem3"}</code>. The stemming dictionary is applied in addition to any algorithmic stemming. This enables you to override the results of the algorithmic stemming to correct specific cases of overstemming or understemming. The maximum size of a stemming dictionary is 500 KB.',
        }),
    ).exactOptional(),
    JapaneseTokenizationDictionary: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON array that contains a collection of terms, tokens, readings and part of speech for Japanese Tokenizaiton. The Japanese tokenization dictionary enables you to override the default tokenization for selected terms. This is only valid for Japanese language fields.',
        }),
    ).exactOptional(),
    AlgorithmicStemming: AlgorithmicStemmingSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of algorithmic stemming to perform: <code>none</code>, <code>minimal</code>, <code>light</code>, or <code>full</code>. The available levels vary depending on the language. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/text-processing.html#text-processing-settings" target="_blank">Language Specific Text Processing Settings</a> in the <i>Amazon CloudSearch Developer Guide</i> ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese.',
    required: [],
  })
  .openapi('AnalysisOptions')

const AnalysisSchemeSchema = z
  .object({
    AnalysisSchemeName: StandardNameSchema,
    AnalysisSchemeLanguage: AnalysisSchemeLanguageSchema,
    AnalysisOptions: AnalysisOptionsSchema.exactOptional(),
  })
  .openapi({
    required: ['AnalysisSchemeName', 'AnalysisSchemeLanguage'],
    description:
      'Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.',
  })
  .openapi('AnalysisScheme')

const UpdateTimestampSchema = z.iso.datetime({ offset: true }).openapi('UpdateTimestamp')

const UIntValueSchema = z.int().min(0).openapi('UIntValue')

const OptionStateSchema = z
  .enum(['RequiresIndexDocuments', 'Processing', 'Active', 'FailedToValidate'])
  .openapi({
    description:
      "<p>The state of processing a change to an option. One of:</p> <ul> <li>RequiresIndexDocuments: The option's latest value will not be deployed until <a>IndexDocuments</a> has been called and indexing is complete.</li> <li>Processing: The option's latest value is in the process of being activated.</li> <li>Active: The option's latest value is fully deployed. </li> <li>FailedToValidate: The option value is not compatible with the domain's data and cannot be used to index the data. You must either modify the option value or update or remove the incompatible documents.</li> </ul>",
  })
  .openapi('OptionState')

const OptionStatusSchema = z
  .object({
    CreationDate: UpdateTimestampSchema.and(
      z.any().openapi({ description: 'A timestamp for when this option was created.' }),
    ),
    UpdateDate: UpdateTimestampSchema.and(
      z.any().openapi({ description: 'A timestamp for when this option was last updated.' }),
    ),
    UpdateVersion: UIntValueSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique integer that indicates when this option was last updated.',
        }),
    ).exactOptional(),
    State: OptionStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The state of processing a change to an option. Possible values:</p><ul> <li><code>RequiresIndexDocuments</code>: the option's latest value will not be deployed until <a>IndexDocuments</a> has been called and indexing is complete.</li> <li><code>Processing</code>: the option's latest value is in the process of being activated. </li> <li><code>Active</code>: the option's latest value is completely deployed.</li> <li><code>FailedToValidate</code>: the option value is not compatible with the domain's data and cannot be used to index the data. You must either modify the option value or update or remove the incompatible documents.</li> </ul>",
        }),
    ),
    PendingDeletion: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates that the option will be deleted once processing is complete.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CreationDate', 'UpdateDate', 'State'],
    description: 'The status of domain configuration option.',
  })
  .openapi('OptionStatus')

const AnalysisSchemeStatusSchema = z
  .object({ Options: AnalysisSchemeSchema, Status: OptionStatusSchema })
  .openapi({
    required: ['Options', 'Status'],
    description: 'The status and configuration of an <code>AnalysisScheme</code>.',
  })
  .openapi('AnalysisSchemeStatus')

const DefineAnalysisSchemeResponseSchema = z
  .object({ AnalysisScheme: AnalysisSchemeStatusSchema })
  .openapi({
    required: ['AnalysisScheme'],
    description:
      'The result of a <code><a>DefineAnalysisScheme</a></code> request. Contains the status of the newly-configured analysis scheme.',
  })
  .openapi('DefineAnalysisSchemeResponse')

const InvalidTypeExceptionSchema = z.any().openapi('InvalidTypeException')

const ExpressionValueSchema = z
  .string()
  .min(1)
  .max(10240)
  .openapi({
    description:
      'The expression to evaluate for sorting while processing a search request. The <code>Expression</code> syntax is based on JavaScript expressions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  })
  .openapi('ExpressionValue')

const ExpressionSchema = z
  .object({ ExpressionName: StandardNameSchema, ExpressionValue: ExpressionValueSchema })
  .openapi({
    required: ['ExpressionName', 'ExpressionValue'],
    description:
      'A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results. ',
  })
  .openapi('Expression')

const ExpressionStatusSchema = z
  .object({
    Options: ExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The expression that is evaluated for sorting while processing a search request.',
        }),
    ),
    Status: OptionStatusSchema,
  })
  .openapi({
    required: ['Options', 'Status'],
    description: 'The value of an <code>Expression</code> and its current status.',
  })
  .openapi('ExpressionStatus')

const DefineExpressionResponseSchema = z
  .object({ Expression: ExpressionStatusSchema })
  .openapi({
    required: ['Expression'],
    description:
      'The result of a <code>DefineExpression</code> request. Contains the status of the newly-configured expression.',
  })
  .openapi('DefineExpressionResponse')

const DynamicFieldNameSchema = z
  .string()
  .regex(/([a-z][a-z0-9_]*\*?|\*[a-z0-9_]*)/)
  .min(1)
  .max(64)
  .openapi('DynamicFieldName')

const IndexFieldTypeSchema = z
  .enum([
    'int',
    'double',
    'literal',
    'text',
    'date',
    'latlon',
    'int-array',
    'double-array',
    'literal-array',
    'text-array',
    'date-array',
  ])
  .openapi({
    description:
      'The type of field. The valid options for a field depend on the field type. For more information about the supported field types, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  })
  .openapi('IndexFieldType')

const LongSchema = z.int().openapi('Long')

const IntOptionsSchema = z
  .object({
    DefaultValue: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value to use for the field if the field isn't specified for a document. This can be important if you are using the field in an expression and that field is not present in every document.",
        }),
    ).exactOptional(),
    SourceField: FieldNameSchema.and(
      z.any().openapi({ description: 'The name of the source field to map to the field. ' }),
    ).exactOptional(),
    FacetEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether facet information can be returned for the field.' }),
    ).exactOptional(),
    SearchEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the contents of the field are searchable.' }),
    ).exactOptional(),
    ReturnEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether the contents of the field can be returned in the search results.',
        }),
    ).exactOptional(),
    SortEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the field can be used to sort the search results.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.',
    required: [],
  })
  .openapi('IntOptions')

const DoubleSchema = z.float64().openapi('Double')

const DoubleOptionsSchema = z
  .object({
    DefaultValue: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value to use for the field if the field isn't specified for a document. This can be important if you are using the field in an expression and that field is not present in every document.",
        }),
    ).exactOptional(),
    SourceField: FieldNameSchema.and(
      z.any().openapi({ description: 'The name of the source field to map to the field. ' }),
    ).exactOptional(),
    FacetEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether facet information can be returned for the field.' }),
    ).exactOptional(),
    SearchEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the contents of the field are searchable.' }),
    ).exactOptional(),
    ReturnEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether the contents of the field can be returned in the search results.',
        }),
    ).exactOptional(),
    SortEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the field can be used to sort the search results.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Options for a double-precision 64-bit floating point field. Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default.',
    required: [],
  })
  .openapi('DoubleOptions')

const FieldValueSchema = z
  .string()
  .min(0)
  .max(1024)
  .openapi({ description: 'The value of a field attribute.' })
  .openapi('FieldValue')

const LiteralOptionsSchema = z
  .object({
    DefaultValue: FieldValueSchema.and(
      z
        .any()
        .openapi({
          description: "A value to use for the field if the field isn't specified for a document.",
        }),
    ).exactOptional(),
    SourceField: FieldNameSchema.exactOptional(),
    FacetEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether facet information can be returned for the field.' }),
    ).exactOptional(),
    SearchEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the contents of the field are searchable.' }),
    ).exactOptional(),
    ReturnEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether the contents of the field can be returned in the search results.',
        }),
    ).exactOptional(),
    SortEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the field can be used to sort the search results.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Options for literal field. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default.',
    required: [],
  })
  .openapi('LiteralOptions')

const WordSchema = z.string().regex(/[\S]+/).openapi('Word')

const TextOptionsSchema = z
  .object({
    DefaultValue: FieldValueSchema.and(
      z
        .any()
        .openapi({
          description: "A value to use for the field if the field isn't specified for a document.",
        }),
    ).exactOptional(),
    SourceField: FieldNameSchema.exactOptional(),
    ReturnEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether the contents of the field can be returned in the search results.',
        }),
    ).exactOptional(),
    SortEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the field can be used to sort the search results.' }),
    ).exactOptional(),
    HighlightEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether highlights can be returned for the field.' }),
    ).exactOptional(),
    AnalysisScheme: WordSchema.and(
      z
        .any()
        .openapi({ description: 'The name of an analysis scheme for a <code>text</code> field.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.',
    required: [],
  })
  .openapi('TextOptions')

const DateOptionsSchema = z
  .object({
    DefaultValue: FieldValueSchema.and(
      z
        .any()
        .openapi({
          description: "A value to use for the field if the field isn't specified for a document.",
        }),
    ).exactOptional(),
    SourceField: FieldNameSchema.exactOptional(),
    FacetEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether facet information can be returned for the field.' }),
    ).exactOptional(),
    SearchEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the contents of the field are searchable.' }),
    ).exactOptional(),
    ReturnEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether the contents of the field can be returned in the search results.',
        }),
    ).exactOptional(),
    SortEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the field can be used to sort the search results.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z. Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default.',
    required: [],
  })
  .openapi('DateOptions')

const LatLonOptionsSchema = z
  .object({
    DefaultValue: FieldValueSchema.and(
      z
        .any()
        .openapi({
          description: "A value to use for the field if the field isn't specified for a document.",
        }),
    ).exactOptional(),
    SourceField: FieldNameSchema.exactOptional(),
    FacetEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether facet information can be returned for the field.' }),
    ).exactOptional(),
    SearchEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the contents of the field are searchable.' }),
    ).exactOptional(),
    ReturnEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether the contents of the field can be returned in the search results.',
        }),
    ).exactOptional(),
    SortEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the field can be used to sort the search results.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default.',
    required: [],
  })
  .openapi('LatLonOptions')

const FieldNameCommaListSchema = z
  .string()
  .regex(/\s*[a-z*][a-z0-9_]*\*?\s*(,\s*[a-z*][a-z0-9_]*\*?\s*)*/)
  .openapi('FieldNameCommaList')

const IntArrayOptionsSchema = z
  .object({
    DefaultValue: LongSchema.and(
      z
        .any()
        .openapi({
          description: "A value to use for the field if the field isn't specified for a document.",
        }),
    ).exactOptional(),
    SourceFields: FieldNameCommaListSchema.and(
      z.any().openapi({ description: 'A list of source fields to map to the field. ' }),
    ).exactOptional(),
    FacetEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether facet information can be returned for the field.' }),
    ).exactOptional(),
    SearchEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the contents of the field are searchable.' }),
    ).exactOptional(),
    ReturnEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether the contents of the field can be returned in the search results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Options for a field that contains an array of 64-bit signed integers. Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default.',
    required: [],
  })
  .openapi('IntArrayOptions')

const DoubleArrayOptionsSchema = z
  .object({
    DefaultValue: DoubleSchema.and(
      z
        .any()
        .openapi({
          description: "A value to use for the field if the field isn't specified for a document.",
        }),
    ).exactOptional(),
    SourceFields: FieldNameCommaListSchema.and(
      z.any().openapi({ description: 'A list of source fields to map to the field. ' }),
    ).exactOptional(),
    FacetEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether facet information can be returned for the field.' }),
    ).exactOptional(),
    SearchEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the contents of the field are searchable.' }),
    ).exactOptional(),
    ReturnEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether the contents of the field can be returned in the search results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Options for a field that contains an array of double-precision 64-bit floating point values. Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>. All options are enabled by default.',
    required: [],
  })
  .openapi('DoubleArrayOptions')

const LiteralArrayOptionsSchema = z
  .object({
    DefaultValue: FieldValueSchema.and(
      z
        .any()
        .openapi({
          description: "A value to use for the field if the field isn't specified for a document.",
        }),
    ).exactOptional(),
    SourceFields: FieldNameCommaListSchema.and(
      z.any().openapi({ description: 'A list of source fields to map to the field. ' }),
    ).exactOptional(),
    FacetEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether facet information can be returned for the field.' }),
    ).exactOptional(),
    SearchEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the contents of the field are searchable.' }),
    ).exactOptional(),
    ReturnEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether the contents of the field can be returned in the search results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Options for a field that contains an array of literal strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default.',
    required: [],
  })
  .openapi('LiteralArrayOptions')

const TextArrayOptionsSchema = z
  .object({
    DefaultValue: FieldValueSchema.and(
      z
        .any()
        .openapi({
          description: "A value to use for the field if the field isn't specified for a document.",
        }),
    ).exactOptional(),
    SourceFields: FieldNameCommaListSchema.and(
      z.any().openapi({ description: 'A list of source fields to map to the field. ' }),
    ).exactOptional(),
    ReturnEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether the contents of the field can be returned in the search results.',
        }),
    ).exactOptional(),
    HighlightEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether highlights can be returned for the field.' }),
    ).exactOptional(),
    AnalysisScheme: WordSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of an analysis scheme for a <code>text-array</code> field.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Options for a field that contains an array of text strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.',
    required: [],
  })
  .openapi('TextArrayOptions')

const DateArrayOptionsSchema = z
  .object({
    DefaultValue: FieldValueSchema.and(
      z
        .any()
        .openapi({
          description: "A value to use for the field if the field isn't specified for a document.",
        }),
    ).exactOptional(),
    SourceFields: FieldNameCommaListSchema.and(
      z.any().openapi({ description: 'A list of source fields to map to the field. ' }),
    ).exactOptional(),
    FacetEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether facet information can be returned for the field.' }),
    ).exactOptional(),
    SearchEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the contents of the field are searchable.' }),
    ).exactOptional(),
    ReturnEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether the contents of the field can be returned in the search results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Options for a field that contains an array of dates. Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default.',
    required: [],
  })
  .openapi('DateArrayOptions')

const IndexFieldSchema = z
  .object({
    IndexFieldName: DynamicFieldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>",
        }),
    ),
    IndexFieldType: IndexFieldTypeSchema,
    IntOptions: IntOptionsSchema.exactOptional(),
    DoubleOptions: DoubleOptionsSchema.exactOptional(),
    LiteralOptions: LiteralOptionsSchema.exactOptional(),
    TextOptions: TextOptionsSchema.exactOptional(),
    DateOptions: DateOptionsSchema.exactOptional(),
    LatLonOptions: LatLonOptionsSchema.exactOptional(),
    IntArrayOptions: IntArrayOptionsSchema.exactOptional(),
    DoubleArrayOptions: DoubleArrayOptionsSchema.exactOptional(),
    LiteralArrayOptions: LiteralArrayOptionsSchema.exactOptional(),
    TextArrayOptions: TextArrayOptionsSchema.exactOptional(),
    DateArrayOptions: DateArrayOptionsSchema.exactOptional(),
  })
  .openapi({
    required: ['IndexFieldName', 'IndexFieldType'],
    description:
      'Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.',
  })
  .openapi('IndexField')

const IndexFieldStatusSchema = z
  .object({ Options: IndexFieldSchema, Status: OptionStatusSchema })
  .openapi({
    required: ['Options', 'Status'],
    description: 'The value of an <code>IndexField</code> and its current status.',
  })
  .openapi('IndexFieldStatus')

const DefineIndexFieldResponseSchema = z
  .object({ IndexField: IndexFieldStatusSchema })
  .openapi({
    required: ['IndexField'],
    description:
      'The result of a <code><a>DefineIndexField</a></code> request. Contains the status of the newly-configured index field.',
  })
  .openapi('DefineIndexFieldResponse')

const SuggesterFuzzyMatchingSchema = z
  .enum(['none', 'low', 'high'])
  .openapi('SuggesterFuzzyMatching')

const DocumentSuggesterOptionsSchema = z
  .object({
    SourceField: FieldNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the index field you want to use for suggestions. ' }),
    ),
    FuzzyMatching: SuggesterFuzzyMatchingSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of fuzziness allowed when suggesting matches for a string: <code>none</code>, <code>low</code>, or <code>high</code>. With none, the specified string is treated as an exact prefix. With low, suggestions must differ from the specified string by no more than one character. With high, suggestions can differ by up to two characters. The default is none. ',
        }),
    ).exactOptional(),
    SortExpression: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "An expression that computes a score for each suggestion to control how they are sorted. The scores are rounded to the nearest integer, with a floor of 0 and a ceiling of 2^31-1. A document's relevance score is not computed for suggestions, so sort expressions cannot reference the <code>_score</code> value. To sort suggestions using a numeric field or existing expression, simply specify the name of the field or expression. If no expression is configured for the suggester, the suggestions are sorted with the closest matches listed first.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SourceField'], description: 'Options for a search suggester.' })
  .openapi('DocumentSuggesterOptions')

const SuggesterSchema = z
  .object({
    SuggesterName: StandardNameSchema,
    DocumentSuggesterOptions: DocumentSuggesterOptionsSchema,
  })
  .openapi({
    required: ['SuggesterName', 'DocumentSuggesterOptions'],
    description:
      'Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. ',
  })
  .openapi('Suggester')

const SuggesterStatusSchema = z
  .object({ Options: SuggesterSchema, Status: OptionStatusSchema })
  .openapi({
    required: ['Options', 'Status'],
    description: 'The value of a <code>Suggester</code> and its current status.',
  })
  .openapi('SuggesterStatus')

const DefineSuggesterResponseSchema = z
  .object({ Suggester: SuggesterStatusSchema })
  .openapi({
    required: ['Suggester'],
    description:
      'The result of a <code>DefineSuggester</code> request. Contains the status of the newly-configured suggester.',
  })
  .openapi('DefineSuggesterResponse')

const DeleteAnalysisSchemeResponseSchema = z
  .object({
    AnalysisScheme: AnalysisSchemeStatusSchema.and(
      z.any().openapi({ description: 'The status of the analysis scheme being deleted.' }),
    ),
  })
  .openapi({
    required: ['AnalysisScheme'],
    description:
      'The result of a <code>DeleteAnalysisScheme</code> request. Contains the status of the deleted analysis scheme.',
  })
  .openapi('DeleteAnalysisSchemeResponse')

const DeleteDomainResponseSchema = z
  .object({ DomainStatus: DomainStatusSchema.exactOptional() })
  .openapi({
    description:
      'The result of a <code>DeleteDomain</code> request. Contains the status of a newly deleted domain, or no status if the domain has already been completely deleted.',
    required: [],
  })
  .openapi('DeleteDomainResponse')

const DeleteExpressionResponseSchema = z
  .object({
    Expression: ExpressionStatusSchema.and(
      z.any().openapi({ description: 'The status of the expression being deleted.' }),
    ),
  })
  .openapi({
    required: ['Expression'],
    description:
      'The result of a <code><a>DeleteExpression</a></code> request. Specifies the expression being deleted.',
  })
  .openapi('DeleteExpressionResponse')

const DeleteIndexFieldResponseSchema = z
  .object({
    IndexField: IndexFieldStatusSchema.and(
      z.any().openapi({ description: 'The status of the index field being deleted.' }),
    ),
  })
  .openapi({
    required: ['IndexField'],
    description: 'The result of a <code><a>DeleteIndexField</a></code> request.',
  })
  .openapi('DeleteIndexFieldResponse')

const DeleteSuggesterResponseSchema = z
  .object({
    Suggester: SuggesterStatusSchema.and(
      z.any().openapi({ description: 'The status of the suggester being deleted.' }),
    ),
  })
  .openapi({
    required: ['Suggester'],
    description:
      'The result of a <code>DeleteSuggester</code> request. Contains the status of the deleted suggester.',
  })
  .openapi('DeleteSuggesterResponse')

const AnalysisSchemeStatusListSchema = z
  .array(AnalysisSchemeStatusSchema)
  .openapi({ description: 'A list of the analysis schemes configured for a domain.' })
  .openapi('AnalysisSchemeStatusList')

const DescribeAnalysisSchemesResponseSchema = z
  .object({
    AnalysisSchemes: AnalysisSchemeStatusListSchema.and(
      z.any().openapi({ description: 'The analysis scheme descriptions.' }),
    ),
  })
  .openapi({
    required: ['AnalysisSchemes'],
    description:
      'The result of a <code>DescribeAnalysisSchemes</code> request. Contains the analysis schemes configured for the domain specified in the request.',
  })
  .openapi('DescribeAnalysisSchemesResponse')

const MultiAZSchema = z.boolean().openapi('MultiAZ')

const AvailabilityOptionsStatusSchema = z
  .object({
    Options: MultiAZSchema.and(
      z.any().openapi({ description: 'The availability options configured for the domain.' }),
    ),
    Status: OptionStatusSchema,
  })
  .openapi({
    required: ['Options', 'Status'],
    description: "The status and configuration of the domain's availability options.",
  })
  .openapi('AvailabilityOptionsStatus')

const DescribeAvailabilityOptionsResponseSchema = z
  .object({
    AvailabilityOptions: AvailabilityOptionsStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The availability options configured for the domain. Indicates whether Multi-AZ is enabled for the domain. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of a <code>DescribeAvailabilityOptions</code> request. Indicates whether or not the Multi-AZ option is enabled for the domain specified in the request. ',
    required: [],
  })
  .openapi('DescribeAvailabilityOptionsResponse')

const DisabledOperationExceptionSchema = z.any().openapi('DisabledOperationException')

const TLSSecurityPolicySchema = z
  .enum(['Policy-Min-TLS-1-0-2019-07', 'Policy-Min-TLS-1-2-2019-07'])
  .openapi({ description: 'The minimum required TLS version.' })
  .openapi('TLSSecurityPolicy')

const DomainEndpointOptionsSchema = z
  .object({
    EnforceHTTPS: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the domain is HTTPS only enabled.' }),
    ).exactOptional(),
    TLSSecurityPolicy: TLSSecurityPolicySchema.and(
      z.any().openapi({ description: 'The minimum required TLS version' }),
    ).exactOptional(),
  })
  .openapi({ description: "The domain's endpoint options.", required: [] })
  .openapi('DomainEndpointOptions')

const DomainEndpointOptionsStatusSchema = z
  .object({
    Options: DomainEndpointOptionsSchema.and(
      z.any().openapi({ description: 'The domain endpoint options configured for the domain.' }),
    ),
    Status: OptionStatusSchema.and(
      z.any().openapi({ description: 'The status of the configured domain endpoint options.' }),
    ),
  })
  .openapi({
    required: ['Options', 'Status'],
    description: "The configuration and status of the domain's endpoint options.",
  })
  .openapi('DomainEndpointOptionsStatus')

const DescribeDomainEndpointOptionsResponseSchema = z
  .object({
    DomainEndpointOptions: DomainEndpointOptionsStatusSchema.and(
      z
        .any()
        .openapi({
          description: "The status and configuration of a search domain's endpoint options.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "The result of a <code>DescribeDomainEndpointOptions</code> request. Contains the status and configuration of a search domain's endpoint options. ",
    required: [],
  })
  .openapi('DescribeDomainEndpointOptionsResponse')

const DomainStatusListSchema = z
  .array(DomainStatusSchema)
  .openapi({ description: 'A list that contains the status of each requested domain.' })
  .openapi('DomainStatusList')

const DescribeDomainsResponseSchema = z
  .object({ DomainStatusList: DomainStatusListSchema })
  .openapi({
    required: ['DomainStatusList'],
    description:
      'The result of a <code>DescribeDomains</code> request. Contains the status of the domains specified in the request or all domains owned by the account.',
  })
  .openapi('DescribeDomainsResponse')

const ExpressionStatusListSchema = z
  .array(ExpressionStatusSchema)
  .openapi({ description: 'Contains the status of multiple expressions.' })
  .openapi('ExpressionStatusList')

const DescribeExpressionsResponseSchema = z
  .object({
    Expressions: ExpressionStatusListSchema.and(
      z.any().openapi({ description: 'The expressions configured for the domain.' }),
    ),
  })
  .openapi({
    required: ['Expressions'],
    description:
      'The result of a <code>DescribeExpressions</code> request. Contains the expressions configured for the domain specified in the request.',
  })
  .openapi('DescribeExpressionsResponse')

const IndexFieldStatusListSchema = z
  .array(IndexFieldStatusSchema)
  .openapi({ description: 'Contains the status of multiple index fields.' })
  .openapi('IndexFieldStatusList')

const DescribeIndexFieldsResponseSchema = z
  .object({
    IndexFields: IndexFieldStatusListSchema.and(
      z.any().openapi({ description: 'The index fields configured for the domain.' }),
    ),
  })
  .openapi({
    required: ['IndexFields'],
    description:
      'The result of a <code>DescribeIndexFields</code> request. Contains the index fields configured for the domain specified in the request.',
  })
  .openapi('DescribeIndexFieldsResponse')

const PartitionInstanceTypeSchema = z
  .enum([
    'search.m1.small',
    'search.m1.large',
    'search.m2.xlarge',
    'search.m2.2xlarge',
    'search.m3.medium',
    'search.m3.large',
    'search.m3.xlarge',
    'search.m3.2xlarge',
    'search.small',
    'search.medium',
    'search.large',
    'search.xlarge',
    'search.2xlarge',
    'search.previousgeneration.small',
    'search.previousgeneration.large',
    'search.previousgeneration.xlarge',
    'search.previousgeneration.2xlarge',
  ])
  .openapi({
    description:
      'The instance type (such as <code>search.m1.small</code>) on which an index partition is hosted.',
  })
  .openapi('PartitionInstanceType')

const ScalingParametersSchema = z
  .object({
    DesiredInstanceType: PartitionInstanceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance type that you want to preconfigure for your domain. For example, <code>search.m1.small</code>.',
        }),
    ).exactOptional(),
    DesiredReplicationCount: UIntValueSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of replicas you want to preconfigure for each index partition.',
        }),
    ).exactOptional(),
    DesiredPartitionCount: UIntValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of partitions you want to preconfigure for your domain. Only valid when you select <code>m2.2xlarge</code> as the desired instance type.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The desired instance type and desired number of replicas of each index partition.',
    required: [],
  })
  .openapi('ScalingParameters')

const ScalingParametersStatusSchema = z
  .object({ Options: ScalingParametersSchema, Status: OptionStatusSchema })
  .openapi({
    required: ['Options', 'Status'],
    description: "The status and configuration of a search domain's scaling parameters. ",
  })
  .openapi('ScalingParametersStatus')

const DescribeScalingParametersResponseSchema = z
  .object({ ScalingParameters: ScalingParametersStatusSchema })
  .openapi({
    required: ['ScalingParameters'],
    description:
      'The result of a <code>DescribeScalingParameters</code> request. Contains the scaling parameters configured for the domain specified in the request.',
  })
  .openapi('DescribeScalingParametersResponse')

const PolicyDocumentSchema = z
  .string()
  .openapi({
    description:
      'Access rules for a domain\'s document or search service endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. The maximum size of a policy document is 100 KB.',
  })
  .openapi('PolicyDocument')

const AccessPoliciesStatusSchema = z
  .object({ Options: PolicyDocumentSchema, Status: OptionStatusSchema })
  .openapi({
    required: ['Options', 'Status'],
    description:
      "The configured access rules for the domain's document and search endpoints, and the current status of those rules.",
  })
  .openapi('AccessPoliciesStatus')

const DescribeServiceAccessPoliciesResponseSchema = z
  .object({
    AccessPolicies: AccessPoliciesStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The access rules configured for the domain specified in the request.',
        }),
    ),
  })
  .openapi({
    required: ['AccessPolicies'],
    description: 'The result of a <code>DescribeServiceAccessPolicies</code> request.',
  })
  .openapi('DescribeServiceAccessPoliciesResponse')

const SuggesterStatusListSchema = z
  .array(SuggesterStatusSchema)
  .openapi({ description: 'Contains the status of multiple suggesters.' })
  .openapi('SuggesterStatusList')

const DescribeSuggestersResponseSchema = z
  .object({
    Suggesters: SuggesterStatusListSchema.and(
      z
        .any()
        .openapi({
          description: 'The suggesters configured for the domain specified in the request.',
        }),
    ),
  })
  .openapi({
    required: ['Suggesters'],
    description: 'The result of a <code>DescribeSuggesters</code> request.',
  })
  .openapi('DescribeSuggestersResponse')

const IndexDocumentsResponseSchema = z
  .object({
    FieldNames: FieldNameListSchema.and(
      z.any().openapi({ description: 'The names of the fields that are currently being indexed.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of an <code>IndexDocuments</code> request. Contains the status of the indexing operation, including the fields being indexed.',
    required: [],
  })
  .openapi('IndexDocumentsResponse')

const APIVersionSchema = z
  .string()
  .openapi({
    description: 'The Amazon CloudSearch API version for a domain: 2011-02-01 or 2013-01-01.',
  })
  .openapi('APIVersion')

const DomainNameMapSchema = z
  .record(z.string(), APIVersionSchema)
  .openapi({ description: 'A collection of domain names.' })
  .openapi('DomainNameMap')

const ListDomainNamesResponseSchema = z
  .object({
    DomainNames: DomainNameMapSchema.and(
      z.any().openapi({ description: 'The names of the search domains owned by an account.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of a <code>ListDomainNames</code> request. Contains a list of the domains owned by an account.',
    required: [],
  })
  .openapi('ListDomainNamesResponse')

const UpdateAvailabilityOptionsResponseSchema = z
  .object({
    AvailabilityOptions: AvailabilityOptionsStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The newly-configured availability options. Indicates whether Multi-AZ is enabled for the domain. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "The result of a <code>UpdateAvailabilityOptions</code> request. Contains the status of the domain's availability options. ",
    required: [],
  })
  .openapi('UpdateAvailabilityOptionsResponse')

const UpdateDomainEndpointOptionsResponseSchema = z
  .object({
    DomainEndpointOptions: DomainEndpointOptionsStatusSchema.and(
      z.any().openapi({ description: 'The newly-configured domain endpoint options.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "The result of a <code>UpdateDomainEndpointOptions</code> request. Contains the configuration and status of the domain's endpoint options. ",
    required: [],
  })
  .openapi('UpdateDomainEndpointOptionsResponse')

const UpdateScalingParametersResponseSchema = z
  .object({ ScalingParameters: ScalingParametersStatusSchema })
  .openapi({
    required: ['ScalingParameters'],
    description:
      'The result of a <code>UpdateScalingParameters</code> request. Contains the status of the newly-configured scaling parameters.',
  })
  .openapi('UpdateScalingParametersResponse')

const UpdateServiceAccessPoliciesResponseSchema = z
  .object({
    AccessPolicies: AccessPoliciesStatusSchema.and(
      z.any().openapi({ description: 'The access rules configured for the domain.' }),
    ),
  })
  .openapi({
    required: ['AccessPolicies'],
    description:
      'The result of an <code>UpdateServiceAccessPolicies</code> request. Contains the new access policies.',
  })
  .openapi('UpdateServiceAccessPoliciesResponse')

const BuildSuggestersRequestSchema = z
  .object({ DomainName: DomainNameSchema })
  .openapi({
    required: ['DomainName'],
    title: 'BuildSuggestersRequest',
    description:
      'Container for the parameters to the <code><a>BuildSuggester</a></code> operation. Specifies the name of the domain you want to update.',
  })
  .openapi('BuildSuggestersRequest')

const CreateDomainRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name for the domain you are creating. Allowed characters are a-z (lower-case letters), 0-9, and hyphen (-). Domain names must start with a letter or number and be at least 3 and no more than 28 characters long.',
        }),
    ),
  })
  .openapi({
    required: ['DomainName'],
    title: 'CreateDomainRequest',
    description:
      'Container for the parameters to the <code><a>CreateDomain</a></code> operation. Specifies a name for the new search domain.',
  })
  .openapi('CreateDomainRequest')

const DefineAnalysisSchemeRequestSchema = z
  .object({ DomainName: DomainNameSchema, AnalysisScheme: AnalysisSchemeSchema })
  .openapi({
    required: ['DomainName', 'AnalysisScheme'],
    title: 'DefineAnalysisSchemeRequest',
    description:
      'Container for the parameters to the <code><a>DefineAnalysisScheme</a></code> operation. Specifies the name of the domain you want to update and the analysis scheme configuration.',
  })
  .openapi('DefineAnalysisSchemeRequest')

const DefineExpressionRequestSchema = z
  .object({ DomainName: DomainNameSchema, Expression: ExpressionSchema })
  .openapi({
    required: ['DomainName', 'Expression'],
    title: 'DefineExpressionRequest',
    description:
      'Container for the parameters to the <code><a>DefineExpression</a></code> operation. Specifies the name of the domain you want to update and the expression you want to configure.',
  })
  .openapi('DefineExpressionRequest')

const DefineIndexFieldRequestSchema = z
  .object({
    DomainName: DomainNameSchema,
    IndexField: IndexFieldSchema.and(
      z.any().openapi({ description: 'The index field and field options you want to configure. ' }),
    ),
  })
  .openapi({
    required: ['DomainName', 'IndexField'],
    title: 'DefineIndexFieldRequest',
    description:
      'Container for the parameters to the <code><a>DefineIndexField</a></code> operation. Specifies the name of the domain you want to update and the index field configuration.',
  })
  .openapi('DefineIndexFieldRequest')

const DefineSuggesterRequestSchema = z
  .object({ DomainName: DomainNameSchema, Suggester: SuggesterSchema })
  .openapi({
    required: ['DomainName', 'Suggester'],
    title: 'DefineSuggesterRequest',
    description:
      'Container for the parameters to the <code><a>DefineSuggester</a></code> operation. Specifies the name of the domain you want to update and the suggester configuration.',
  })
  .openapi('DefineSuggesterRequest')

const DeleteAnalysisSchemeRequestSchema = z
  .object({
    DomainName: DomainNameSchema,
    AnalysisSchemeName: StandardNameSchema.and(
      z.any().openapi({ description: 'The name of the analysis scheme you want to delete.' }),
    ),
  })
  .openapi({
    required: ['DomainName', 'AnalysisSchemeName'],
    title: 'DeleteAnalysisSchemeRequest',
    description:
      'Container for the parameters to the <code><a>DeleteAnalysisScheme</a></code> operation. Specifies the name of the domain you want to update and the analysis scheme you want to delete. ',
  })
  .openapi('DeleteAnalysisSchemeRequest')

const DeleteDomainRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The name of the domain you want to permanently delete.' }),
    ),
  })
  .openapi({
    required: ['DomainName'],
    title: 'DeleteDomainRequest',
    description:
      'Container for the parameters to the <code><a>DeleteDomain</a></code> operation. Specifies the name of the domain you want to delete.',
  })
  .openapi('DeleteDomainRequest')

const DeleteExpressionRequestSchema = z
  .object({
    DomainName: DomainNameSchema,
    ExpressionName: StandardNameSchema.and(
      z.any().openapi({ description: 'The name of the <code><a>Expression</a></code> to delete.' }),
    ),
  })
  .openapi({
    required: ['DomainName', 'ExpressionName'],
    title: 'DeleteExpressionRequest',
    description:
      'Container for the parameters to the <code><a>DeleteExpression</a></code> operation. Specifies the name of the domain you want to update and the name of the expression you want to delete.',
  })
  .openapi('DeleteExpressionRequest')

const DeleteIndexFieldRequestSchema = z
  .object({
    DomainName: DomainNameSchema,
    IndexFieldName: DynamicFieldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the index field your want to remove from the domain's indexing options.",
        }),
    ),
  })
  .openapi({
    required: ['DomainName', 'IndexFieldName'],
    title: 'DeleteIndexFieldRequest',
    description:
      'Container for the parameters to the <code><a>DeleteIndexField</a></code> operation. Specifies the name of the domain you want to update and the name of the index field you want to delete.',
  })
  .openapi('DeleteIndexFieldRequest')

const DeleteSuggesterRequestSchema = z
  .object({
    DomainName: DomainNameSchema,
    SuggesterName: StandardNameSchema.and(
      z.any().openapi({ description: 'Specifies the name of the suggester you want to delete.' }),
    ),
  })
  .openapi({
    required: ['DomainName', 'SuggesterName'],
    title: 'DeleteSuggesterRequest',
    description:
      'Container for the parameters to the <code><a>DeleteSuggester</a></code> operation. Specifies the name of the domain you want to update and name of the suggester you want to delete.',
  })
  .openapi('DeleteSuggesterRequest')

const StandardNameListSchema = z.array(StandardNameSchema).openapi('StandardNameList')

const DescribeAnalysisSchemesRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The name of the domain you want to describe.' }),
    ),
    AnalysisSchemeNames: StandardNameListSchema.and(
      z.any().openapi({ description: 'The analysis schemes you want to describe.' }),
    ).exactOptional(),
    Deployed: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainName'],
    title: 'DescribeAnalysisSchemesRequest',
    description:
      'Container for the parameters to the <code><a>DescribeAnalysisSchemes</a></code> operation. Specifies the name of the domain you want to describe. To limit the response to particular analysis schemes, specify the names of the analysis schemes you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>. ',
  })
  .openapi('DescribeAnalysisSchemesRequest')

const DescribeAvailabilityOptionsRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The name of the domain you want to describe.' }),
    ),
    Deployed: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainName'],
    title: 'DescribeAvailabilityOptionsRequest',
    description:
      'Container for the parameters to the <code><a>DescribeAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>.',
  })
  .openapi('DescribeAvailabilityOptionsRequest')

const DescribeDomainEndpointOptionsRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'A string that represents the name of a domain.' }),
    ),
    Deployed: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether to retrieve the latest configuration (which might be in a Processing state) or the current, active configuration. Defaults to <code>false</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainName'],
    title: 'DescribeDomainEndpointOptionsRequest',
    description:
      'Container for the parameters to the <code><a>DescribeDomainEndpointOptions</a></code> operation. Specify the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>.',
  })
  .openapi('DescribeDomainEndpointOptionsRequest')

const DomainNameListSchema = z
  .array(DomainNameSchema)
  .openapi({ description: 'A list of domain names.' })
  .openapi('DomainNameList')

const DescribeDomainsRequestSchema = z
  .object({
    DomainNames: DomainNameListSchema.and(
      z
        .any()
        .openapi({ description: 'The names of the domains you want to include in the response.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeDomainsRequest',
    description:
      'Container for the parameters to the <code><a>DescribeDomains</a></code> operation. By default shows the status of all domains. To restrict the response to particular domains, specify the names of the domains you want to describe.',
    required: [],
  })
  .openapi('DescribeDomainsRequest')

const DescribeExpressionsRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The name of the domain you want to describe.' }),
    ),
    ExpressionNames: StandardNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Limits the <code><a>DescribeExpressions</a></code> response to the specified expressions. If not specified, all expressions are shown.',
        }),
    ).exactOptional(),
    Deployed: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainName'],
    title: 'DescribeExpressionsRequest',
    description:
      'Container for the parameters to the <code><a>DescribeDomains</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular expressions, specify the names of the expressions you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.',
  })
  .openapi('DescribeExpressionsRequest')

const DynamicFieldNameListSchema = z.array(DynamicFieldNameSchema).openapi('DynamicFieldNameList')

const DescribeIndexFieldsRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The name of the domain you want to describe.' }),
    ),
    FieldNames: DynamicFieldNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the index fields you want to describe. If not specified, information is returned for all configured index fields.',
        }),
    ).exactOptional(),
    Deployed: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainName'],
    title: 'DescribeIndexFieldsRequest',
    description:
      'Container for the parameters to the <code><a>DescribeIndexFields</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular index fields, specify the names of the index fields you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.',
  })
  .openapi('DescribeIndexFieldsRequest')

const DescribeScalingParametersRequestSchema = z
  .object({ DomainName: DomainNameSchema })
  .openapi({
    required: ['DomainName'],
    title: 'DescribeScalingParametersRequest',
    description:
      'Container for the parameters to the <code><a>DescribeScalingParameters</a></code> operation. Specifies the name of the domain you want to describe. ',
  })
  .openapi('DescribeScalingParametersRequest')

const DescribeServiceAccessPoliciesRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The name of the domain you want to describe.' }),
    ),
    Deployed: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainName'],
    title: 'DescribeServiceAccessPoliciesRequest',
    description:
      'Container for the parameters to the <code><a>DescribeServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.',
  })
  .openapi('DescribeServiceAccessPoliciesRequest')

const DescribeSuggestersRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The name of the domain you want to describe.' }),
    ),
    SuggesterNames: StandardNameListSchema.and(
      z.any().openapi({ description: 'The suggesters you want to describe.' }),
    ).exactOptional(),
    Deployed: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainName'],
    title: 'DescribeSuggestersRequest',
    description:
      'Container for the parameters to the <code><a>DescribeSuggester</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular suggesters, specify the names of the suggesters you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.',
  })
  .openapi('DescribeSuggestersRequest')

const IndexDocumentsRequestSchema = z
  .object({ DomainName: DomainNameSchema })
  .openapi({
    required: ['DomainName'],
    title: 'IndexDocumentsRequest',
    description:
      'Container for the parameters to the <code><a>IndexDocuments</a></code> operation. Specifies the name of the domain you want to re-index.',
  })
  .openapi('IndexDocumentsRequest')

const UpdateAvailabilityOptionsRequestSchema = z
  .object({
    DomainName: DomainNameSchema,
    MultiAZ: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'You expand an existing search domain to a second Availability Zone by setting the Multi-AZ option to true. Similarly, you can turn off the Multi-AZ option to downgrade the domain to a single Availability Zone by setting the Multi-AZ option to <code>false</code>. ',
        }),
    ),
  })
  .openapi({
    required: ['DomainName', 'MultiAZ'],
    title: 'UpdateAvailabilityOptionsRequest',
    description:
      'Container for the parameters to the <code><a>UpdateAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to update and the Multi-AZ availability option.',
  })
  .openapi('UpdateAvailabilityOptionsRequest')

const UpdateDomainEndpointOptionsRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'A string that represents the name of a domain.' }),
    ),
    DomainEndpointOptions: DomainEndpointOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether to require that all requests to the domain arrive over HTTPS. We recommend Policy-Min-TLS-1-2-2019-07 for TLSSecurityPolicy. For compatibility with older clients, the default is Policy-Min-TLS-1-0-2019-07. ',
        }),
    ),
  })
  .openapi({
    required: ['DomainName', 'DomainEndpointOptions'],
    title: 'UpdateDomainEndpointOptionsRequest',
    description:
      'Container for the parameters to the <code><a>UpdateDomainEndpointOptions</a></code> operation. Specifies the name of the domain you want to update and the domain endpoint options.',
  })
  .openapi('UpdateDomainEndpointOptionsRequest')

const UpdateScalingParametersRequestSchema = z
  .object({ DomainName: DomainNameSchema, ScalingParameters: ScalingParametersSchema })
  .openapi({
    required: ['DomainName', 'ScalingParameters'],
    title: 'UpdateScalingParametersRequest',
    description:
      'Container for the parameters to the <code><a>UpdateScalingParameters</a></code> operation. Specifies the name of the domain you want to update and the scaling parameters you want to configure.',
  })
  .openapi('UpdateScalingParametersRequest')

const UpdateServiceAccessPoliciesRequestSchema = z
  .object({
    DomainName: DomainNameSchema,
    AccessPolicies: PolicyDocumentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The access rules you want to configure. These rules replace any existing rules. ',
        }),
    ),
  })
  .openapi({
    required: ['DomainName', 'AccessPolicies'],
    title: 'UpdateServiceAccessPoliciesRequest',
    description:
      'Container for the parameters to the <code><a>UpdateServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to update and the access rules you want to configure.',
  })
  .openapi('UpdateServiceAccessPoliciesRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const getActionBuildSuggestersRoute = createRoute({
  method: 'get',
  path: '/#Action=BuildSuggesters',
  description:
    'Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'GET_BuildSuggesters',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
      Action: z
        .literal('BuildSuggesters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['BuildSuggesters'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: BuildSuggestersResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postActionBuildSuggestersRoute = createRoute({
  method: 'post',
  path: '/#Action=BuildSuggesters',
  description:
    'Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'POST_BuildSuggesters',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('BuildSuggesters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['BuildSuggesters'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: BuildSuggestersRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: BuildSuggestersResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getActionCreateDomainRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateDomain',
  description:
    'Creates a new search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html" target="_blank">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'GET_CreateDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description:
              'A name for the domain you are creating. Allowed characters are a-z (lower-case letters), 0-9, and hyphen (-). Domain names must start with a letter or number and be at least 3 and no more than 28 characters long.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
      Action: z
        .literal('CreateDomain')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateDomain'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateDomainResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ResourceAlreadyExistsException',
      content: { 'text/xml': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postActionCreateDomainRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateDomain',
  description:
    'Creates a new search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html" target="_blank">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'POST_CreateDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('CreateDomain')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateDomain'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateDomainRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateDomainResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ResourceAlreadyExistsException',
      content: { 'text/xml': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getActionDefineAnalysisSchemeRoute = createRoute({
  method: 'get',
  path: '/#Action=DefineAnalysisScheme',
  description:
    'Configures an analysis scheme that can be applied to a <code>text</code> or <code>text-array</code> field to define language-specific text processing options. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'GET_DefineAnalysisScheme',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['AnalysisSchemeName', ['AnalysisScheme']],
          ['AnalysisSchemeLanguage', ['AnalysisScheme']],
          ['AnalysisOptions', ['AnalysisScheme']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          DomainName: z
            .string()
            .regex(/[a-z][a-z0-9\-]+/)
            .min(3)
            .max(28)
            .openapi({
              param: {
                name: 'DomainName',
                in: 'query',
                required: true,
                description: '',
                schema: {
                  type: 'string',
                  pattern: '[a-z][a-z0-9\\-]+',
                  description:
                    'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
                  minLength: 3,
                  maxLength: 28,
                },
              },
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
            }),
          AnalysisScheme: z
            .object({
              AnalysisSchemeName: StandardNameSchema,
              AnalysisSchemeLanguage: AnalysisSchemeLanguageSchema,
              AnalysisOptions: AnalysisOptionsSchema.exactOptional(),
            })
            .openapi({
              param: {
                name: 'AnalysisScheme',
                in: 'query',
                required: true,
                description: '',
                schema: {
                  type: 'object',
                  required: ['AnalysisSchemeName', 'AnalysisSchemeLanguage'],
                  properties: {
                    AnalysisSchemeName: { $ref: '#/components/schemas/StandardName' },
                    AnalysisSchemeLanguage: { $ref: '#/components/schemas/AnalysisSchemeLanguage' },
                    AnalysisOptions: { $ref: '#/components/schemas/AnalysisOptions' },
                  },
                  description:
                    'Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.',
                },
              },
              required: ['AnalysisSchemeName', 'AnalysisSchemeLanguage'],
              description:
                'Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.',
            }),
          Action: z
            .literal('DefineAnalysisScheme')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['DefineAnalysisScheme'] },
              },
            }),
          Version: z
            .literal('2013-01-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2013-01-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DefineAnalysisSchemeResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postActionDefineAnalysisSchemeRoute = createRoute({
  method: 'post',
  path: '/#Action=DefineAnalysisScheme',
  description:
    'Configures an analysis scheme that can be applied to a <code>text</code> or <code>text-array</code> field to define language-specific text processing options. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'POST_DefineAnalysisScheme',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DefineAnalysisScheme')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DefineAnalysisScheme'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DefineAnalysisSchemeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DefineAnalysisSchemeResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getActionDefineExpressionRoute = createRoute({
  method: 'get',
  path: '/#Action=DefineExpression',
  description:
    'Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'GET_DefineExpression',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['ExpressionName', ['Expression']],
          ['ExpressionValue', ['Expression']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          DomainName: z
            .string()
            .regex(/[a-z][a-z0-9\-]+/)
            .min(3)
            .max(28)
            .openapi({
              param: {
                name: 'DomainName',
                in: 'query',
                required: true,
                description: '',
                schema: {
                  type: 'string',
                  pattern: '[a-z][a-z0-9\\-]+',
                  description:
                    'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
                  minLength: 3,
                  maxLength: 28,
                },
              },
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
            }),
          Expression: z
            .object({ ExpressionName: StandardNameSchema, ExpressionValue: ExpressionValueSchema })
            .openapi({
              param: {
                name: 'Expression',
                in: 'query',
                required: true,
                description: '',
                schema: {
                  type: 'object',
                  required: ['ExpressionName', 'ExpressionValue'],
                  properties: {
                    ExpressionName: { $ref: '#/components/schemas/StandardName' },
                    ExpressionValue: { $ref: '#/components/schemas/ExpressionValue' },
                  },
                  description:
                    'A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results. ',
                },
              },
              required: ['ExpressionName', 'ExpressionValue'],
              description:
                'A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results. ',
            }),
          Action: z
            .literal('DefineExpression')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['DefineExpression'] },
              },
            }),
          Version: z
            .literal('2013-01-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2013-01-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DefineExpressionResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postActionDefineExpressionRoute = createRoute({
  method: 'post',
  path: '/#Action=DefineExpression',
  description:
    'Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'POST_DefineExpression',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DefineExpression')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DefineExpression'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DefineExpressionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DefineExpressionResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getActionDefineIndexFieldRoute = createRoute({
  method: 'get',
  path: '/#Action=DefineIndexField',
  description:
    'Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. ',
  operationId: 'GET_DefineIndexField',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['IndexFieldName', ['IndexField']],
          ['IndexFieldType', ['IndexField']],
          ['IntOptions', ['IndexField']],
          ['DoubleOptions', ['IndexField']],
          ['LiteralOptions', ['IndexField']],
          ['TextOptions', ['IndexField']],
          ['DateOptions', ['IndexField']],
          ['LatLonOptions', ['IndexField']],
          ['IntArrayOptions', ['IndexField']],
          ['DoubleArrayOptions', ['IndexField']],
          ['LiteralArrayOptions', ['IndexField']],
          ['TextArrayOptions', ['IndexField']],
          ['DateArrayOptions', ['IndexField']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          DomainName: z
            .string()
            .regex(/[a-z][a-z0-9\-]+/)
            .min(3)
            .max(28)
            .openapi({
              param: {
                name: 'DomainName',
                in: 'query',
                required: true,
                description: '',
                schema: {
                  type: 'string',
                  pattern: '[a-z][a-z0-9\\-]+',
                  description:
                    'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
                  minLength: 3,
                  maxLength: 28,
                },
              },
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
            }),
          IndexField: z
            .object({
              IndexFieldName: DynamicFieldNameSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      "<p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>",
                  }),
              ),
              IndexFieldType: IndexFieldTypeSchema,
              IntOptions: z
                .object({
                  DefaultValue: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      LongSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            "A value to use for the field if the field isn't specified for a document. This can be important if you are using the field in an expression and that field is not present in every document.",
                        }),
                    )
                    .exactOptional(),
                  SourceField: FieldNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The name of the source field to map to the field. ',
                      }),
                  ).exactOptional(),
                  FacetEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether facet information can be returned for the field.',
                        }),
                    )
                    .exactOptional(),
                  SearchEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether the contents of the field are searchable.',
                        }),
                    )
                    .exactOptional(),
                  ReturnEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Whether the contents of the field can be returned in the search results.',
                        }),
                    )
                    .exactOptional(),
                  SortEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether the field can be used to sort the search results.',
                        }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.',
                  required: [],
                }),
              DoubleOptions: z
                .object({
                  DefaultValue: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      DoubleSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            "A value to use for the field if the field isn't specified for a document. This can be important if you are using the field in an expression and that field is not present in every document.",
                        }),
                    )
                    .exactOptional(),
                  SourceField: FieldNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The name of the source field to map to the field. ',
                      }),
                  ).exactOptional(),
                  FacetEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether facet information can be returned for the field.',
                        }),
                    )
                    .exactOptional(),
                  SearchEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether the contents of the field are searchable.',
                        }),
                    )
                    .exactOptional(),
                  ReturnEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Whether the contents of the field can be returned in the search results.',
                        }),
                    )
                    .exactOptional(),
                  SortEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether the field can be used to sort the search results.',
                        }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Options for a double-precision 64-bit floating point field. Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default.',
                  required: [],
                }),
              LiteralOptions: z
                .object({
                  DefaultValue: FieldValueSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A value to use for the field if the field isn't specified for a document.",
                      }),
                  ).exactOptional(),
                  SourceField: FieldNameSchema.exactOptional(),
                  FacetEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether facet information can be returned for the field.',
                        }),
                    )
                    .exactOptional(),
                  SearchEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether the contents of the field are searchable.',
                        }),
                    )
                    .exactOptional(),
                  ReturnEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Whether the contents of the field can be returned in the search results.',
                        }),
                    )
                    .exactOptional(),
                  SortEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether the field can be used to sort the search results.',
                        }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Options for literal field. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default.',
                  required: [],
                }),
              TextOptions: z
                .object({
                  DefaultValue: FieldValueSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A value to use for the field if the field isn't specified for a document.",
                      }),
                  ).exactOptional(),
                  SourceField: FieldNameSchema.exactOptional(),
                  ReturnEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Whether the contents of the field can be returned in the search results.',
                        }),
                    )
                    .exactOptional(),
                  SortEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether the field can be used to sort the search results.',
                        }),
                    )
                    .exactOptional(),
                  HighlightEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether highlights can be returned for the field.',
                        }),
                    )
                    .exactOptional(),
                  AnalysisScheme: WordSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of an analysis scheme for a <code>text</code> field.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.',
                  required: [],
                }),
              DateOptions: z
                .object({
                  DefaultValue: FieldValueSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A value to use for the field if the field isn't specified for a document.",
                      }),
                  ).exactOptional(),
                  SourceField: FieldNameSchema.exactOptional(),
                  FacetEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether facet information can be returned for the field.',
                        }),
                    )
                    .exactOptional(),
                  SearchEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether the contents of the field are searchable.',
                        }),
                    )
                    .exactOptional(),
                  ReturnEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Whether the contents of the field can be returned in the search results.',
                        }),
                    )
                    .exactOptional(),
                  SortEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether the field can be used to sort the search results.',
                        }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z. Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default.',
                  required: [],
                }),
              LatLonOptions: z
                .object({
                  DefaultValue: FieldValueSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A value to use for the field if the field isn't specified for a document.",
                      }),
                  ).exactOptional(),
                  SourceField: FieldNameSchema.exactOptional(),
                  FacetEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether facet information can be returned for the field.',
                        }),
                    )
                    .exactOptional(),
                  SearchEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether the contents of the field are searchable.',
                        }),
                    )
                    .exactOptional(),
                  ReturnEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Whether the contents of the field can be returned in the search results.',
                        }),
                    )
                    .exactOptional(),
                  SortEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether the field can be used to sort the search results.',
                        }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default.',
                  required: [],
                }),
              IntArrayOptions: z
                .object({
                  DefaultValue: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      LongSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            "A value to use for the field if the field isn't specified for a document.",
                        }),
                    )
                    .exactOptional(),
                  SourceFields: FieldNameCommaListSchema.and(
                    z
                      .any()
                      .openapi({ description: 'A list of source fields to map to the field. ' }),
                  ).exactOptional(),
                  FacetEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether facet information can be returned for the field.',
                        }),
                    )
                    .exactOptional(),
                  SearchEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether the contents of the field are searchable.',
                        }),
                    )
                    .exactOptional(),
                  ReturnEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Whether the contents of the field can be returned in the search results.',
                        }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Options for a field that contains an array of 64-bit signed integers. Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default.',
                  required: [],
                }),
              DoubleArrayOptions: z
                .object({
                  DefaultValue: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      DoubleSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            "A value to use for the field if the field isn't specified for a document.",
                        }),
                    )
                    .exactOptional(),
                  SourceFields: FieldNameCommaListSchema.and(
                    z
                      .any()
                      .openapi({ description: 'A list of source fields to map to the field. ' }),
                  ).exactOptional(),
                  FacetEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether facet information can be returned for the field.',
                        }),
                    )
                    .exactOptional(),
                  SearchEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether the contents of the field are searchable.',
                        }),
                    )
                    .exactOptional(),
                  ReturnEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Whether the contents of the field can be returned in the search results.',
                        }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Options for a field that contains an array of double-precision 64-bit floating point values. Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>. All options are enabled by default.',
                  required: [],
                }),
              LiteralArrayOptions: z
                .object({
                  DefaultValue: FieldValueSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A value to use for the field if the field isn't specified for a document.",
                      }),
                  ).exactOptional(),
                  SourceFields: FieldNameCommaListSchema.and(
                    z
                      .any()
                      .openapi({ description: 'A list of source fields to map to the field. ' }),
                  ).exactOptional(),
                  FacetEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether facet information can be returned for the field.',
                        }),
                    )
                    .exactOptional(),
                  SearchEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether the contents of the field are searchable.',
                        }),
                    )
                    .exactOptional(),
                  ReturnEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Whether the contents of the field can be returned in the search results.',
                        }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Options for a field that contains an array of literal strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default.',
                  required: [],
                }),
              TextArrayOptions: z
                .object({
                  DefaultValue: FieldValueSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A value to use for the field if the field isn't specified for a document.",
                      }),
                  ).exactOptional(),
                  SourceFields: FieldNameCommaListSchema.and(
                    z
                      .any()
                      .openapi({ description: 'A list of source fields to map to the field. ' }),
                  ).exactOptional(),
                  ReturnEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Whether the contents of the field can be returned in the search results.',
                        }),
                    )
                    .exactOptional(),
                  HighlightEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether highlights can be returned for the field.',
                        }),
                    )
                    .exactOptional(),
                  AnalysisScheme: WordSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of an analysis scheme for a <code>text-array</code> field.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Options for a field that contains an array of text strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.',
                  required: [],
                }),
              DateArrayOptions: z
                .object({
                  DefaultValue: FieldValueSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A value to use for the field if the field isn't specified for a document.",
                      }),
                  ).exactOptional(),
                  SourceFields: FieldNameCommaListSchema.and(
                    z
                      .any()
                      .openapi({ description: 'A list of source fields to map to the field. ' }),
                  ).exactOptional(),
                  FacetEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether facet information can be returned for the field.',
                        }),
                    )
                    .exactOptional(),
                  SearchEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description: 'Whether the contents of the field are searchable.',
                        }),
                    )
                    .exactOptional(),
                  ReturnEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      BooleanSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Whether the contents of the field can be returned in the search results.',
                        }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Options for a field that contains an array of dates. Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default.',
                  required: [],
                }),
            })
            .openapi({
              param: {
                name: 'IndexField',
                in: 'query',
                required: true,
                description: 'The index field and field options you want to configure. ',
                schema: {
                  type: 'object',
                  required: ['IndexFieldName', 'IndexFieldType'],
                  properties: {
                    IndexFieldName: {
                      allOf: [
                        { $ref: '#/components/schemas/DynamicFieldName' },
                        {
                          description:
                            "<p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>",
                        },
                      ],
                    },
                    IndexFieldType: { $ref: '#/components/schemas/IndexFieldType' },
                    IntOptions: {
                      type: 'object',
                      properties: {
                        DefaultValue: {
                          allOf: [
                            { $ref: '#/components/schemas/Long' },
                            {
                              description:
                                "A value to use for the field if the field isn't specified for a document. This can be important if you are using the field in an expression and that field is not present in every document.",
                            },
                          ],
                        },
                        SourceField: {
                          allOf: [
                            { $ref: '#/components/schemas/FieldName' },
                            { description: 'The name of the source field to map to the field. ' },
                          ],
                        },
                        FacetEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether facet information can be returned for the field.',
                            },
                          ],
                        },
                        SearchEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            { description: 'Whether the contents of the field are searchable.' },
                          ],
                        },
                        ReturnEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether the contents of the field can be returned in the search results.',
                            },
                          ],
                        },
                        SortEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether the field can be used to sort the search results.',
                            },
                          ],
                        },
                      },
                      description:
                        'Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.',
                    },
                    DoubleOptions: {
                      type: 'object',
                      properties: {
                        DefaultValue: {
                          allOf: [
                            { $ref: '#/components/schemas/Double' },
                            {
                              description:
                                "A value to use for the field if the field isn't specified for a document. This can be important if you are using the field in an expression and that field is not present in every document.",
                            },
                          ],
                        },
                        SourceField: {
                          allOf: [
                            { $ref: '#/components/schemas/FieldName' },
                            { description: 'The name of the source field to map to the field. ' },
                          ],
                        },
                        FacetEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether facet information can be returned for the field.',
                            },
                          ],
                        },
                        SearchEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            { description: 'Whether the contents of the field are searchable.' },
                          ],
                        },
                        ReturnEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether the contents of the field can be returned in the search results.',
                            },
                          ],
                        },
                        SortEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether the field can be used to sort the search results.',
                            },
                          ],
                        },
                      },
                      description:
                        'Options for a double-precision 64-bit floating point field. Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default.',
                    },
                    LiteralOptions: {
                      type: 'object',
                      properties: {
                        DefaultValue: {
                          allOf: [
                            { $ref: '#/components/schemas/FieldValue' },
                            {
                              description:
                                "A value to use for the field if the field isn't specified for a document.",
                            },
                          ],
                        },
                        SourceField: { $ref: '#/components/schemas/FieldName' },
                        FacetEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether facet information can be returned for the field.',
                            },
                          ],
                        },
                        SearchEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            { description: 'Whether the contents of the field are searchable.' },
                          ],
                        },
                        ReturnEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether the contents of the field can be returned in the search results.',
                            },
                          ],
                        },
                        SortEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether the field can be used to sort the search results.',
                            },
                          ],
                        },
                      },
                      description:
                        'Options for literal field. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default.',
                    },
                    TextOptions: {
                      type: 'object',
                      properties: {
                        DefaultValue: {
                          allOf: [
                            { $ref: '#/components/schemas/FieldValue' },
                            {
                              description:
                                "A value to use for the field if the field isn't specified for a document.",
                            },
                          ],
                        },
                        SourceField: { $ref: '#/components/schemas/FieldName' },
                        ReturnEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether the contents of the field can be returned in the search results.',
                            },
                          ],
                        },
                        SortEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether the field can be used to sort the search results.',
                            },
                          ],
                        },
                        HighlightEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            { description: 'Whether highlights can be returned for the field.' },
                          ],
                        },
                        AnalysisScheme: {
                          allOf: [
                            { $ref: '#/components/schemas/Word' },
                            {
                              description:
                                'The name of an analysis scheme for a <code>text</code> field.',
                            },
                          ],
                        },
                      },
                      description:
                        'Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.',
                    },
                    DateOptions: {
                      type: 'object',
                      properties: {
                        DefaultValue: {
                          allOf: [
                            { $ref: '#/components/schemas/FieldValue' },
                            {
                              description:
                                "A value to use for the field if the field isn't specified for a document.",
                            },
                          ],
                        },
                        SourceField: { $ref: '#/components/schemas/FieldName' },
                        FacetEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether facet information can be returned for the field.',
                            },
                          ],
                        },
                        SearchEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            { description: 'Whether the contents of the field are searchable.' },
                          ],
                        },
                        ReturnEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether the contents of the field can be returned in the search results.',
                            },
                          ],
                        },
                        SortEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether the field can be used to sort the search results.',
                            },
                          ],
                        },
                      },
                      description:
                        'Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z. Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default.',
                    },
                    LatLonOptions: {
                      type: 'object',
                      properties: {
                        DefaultValue: {
                          allOf: [
                            { $ref: '#/components/schemas/FieldValue' },
                            {
                              description:
                                "A value to use for the field if the field isn't specified for a document.",
                            },
                          ],
                        },
                        SourceField: { $ref: '#/components/schemas/FieldName' },
                        FacetEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether facet information can be returned for the field.',
                            },
                          ],
                        },
                        SearchEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            { description: 'Whether the contents of the field are searchable.' },
                          ],
                        },
                        ReturnEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether the contents of the field can be returned in the search results.',
                            },
                          ],
                        },
                        SortEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether the field can be used to sort the search results.',
                            },
                          ],
                        },
                      },
                      description:
                        'Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default.',
                    },
                    IntArrayOptions: {
                      type: 'object',
                      properties: {
                        DefaultValue: {
                          allOf: [
                            { $ref: '#/components/schemas/Long' },
                            {
                              description:
                                "A value to use for the field if the field isn't specified for a document.",
                            },
                          ],
                        },
                        SourceFields: {
                          allOf: [
                            { $ref: '#/components/schemas/FieldNameCommaList' },
                            { description: 'A list of source fields to map to the field. ' },
                          ],
                        },
                        FacetEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether facet information can be returned for the field.',
                            },
                          ],
                        },
                        SearchEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            { description: 'Whether the contents of the field are searchable.' },
                          ],
                        },
                        ReturnEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether the contents of the field can be returned in the search results.',
                            },
                          ],
                        },
                      },
                      description:
                        'Options for a field that contains an array of 64-bit signed integers. Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default.',
                    },
                    DoubleArrayOptions: {
                      type: 'object',
                      properties: {
                        DefaultValue: {
                          allOf: [
                            { $ref: '#/components/schemas/Double' },
                            {
                              description:
                                "A value to use for the field if the field isn't specified for a document.",
                            },
                          ],
                        },
                        SourceFields: {
                          allOf: [
                            { $ref: '#/components/schemas/FieldNameCommaList' },
                            { description: 'A list of source fields to map to the field. ' },
                          ],
                        },
                        FacetEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether facet information can be returned for the field.',
                            },
                          ],
                        },
                        SearchEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            { description: 'Whether the contents of the field are searchable.' },
                          ],
                        },
                        ReturnEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether the contents of the field can be returned in the search results.',
                            },
                          ],
                        },
                      },
                      description:
                        'Options for a field that contains an array of double-precision 64-bit floating point values. Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>. All options are enabled by default.',
                    },
                    LiteralArrayOptions: {
                      type: 'object',
                      properties: {
                        DefaultValue: {
                          allOf: [
                            { $ref: '#/components/schemas/FieldValue' },
                            {
                              description:
                                "A value to use for the field if the field isn't specified for a document.",
                            },
                          ],
                        },
                        SourceFields: {
                          allOf: [
                            { $ref: '#/components/schemas/FieldNameCommaList' },
                            { description: 'A list of source fields to map to the field. ' },
                          ],
                        },
                        FacetEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether facet information can be returned for the field.',
                            },
                          ],
                        },
                        SearchEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            { description: 'Whether the contents of the field are searchable.' },
                          ],
                        },
                        ReturnEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether the contents of the field can be returned in the search results.',
                            },
                          ],
                        },
                      },
                      description:
                        'Options for a field that contains an array of literal strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default.',
                    },
                    TextArrayOptions: {
                      type: 'object',
                      properties: {
                        DefaultValue: {
                          allOf: [
                            { $ref: '#/components/schemas/FieldValue' },
                            {
                              description:
                                "A value to use for the field if the field isn't specified for a document.",
                            },
                          ],
                        },
                        SourceFields: {
                          allOf: [
                            { $ref: '#/components/schemas/FieldNameCommaList' },
                            { description: 'A list of source fields to map to the field. ' },
                          ],
                        },
                        ReturnEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether the contents of the field can be returned in the search results.',
                            },
                          ],
                        },
                        HighlightEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            { description: 'Whether highlights can be returned for the field.' },
                          ],
                        },
                        AnalysisScheme: {
                          allOf: [
                            { $ref: '#/components/schemas/Word' },
                            {
                              description:
                                'The name of an analysis scheme for a <code>text-array</code> field.',
                            },
                          ],
                        },
                      },
                      description:
                        'Options for a field that contains an array of text strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.',
                    },
                    DateArrayOptions: {
                      type: 'object',
                      properties: {
                        DefaultValue: {
                          allOf: [
                            { $ref: '#/components/schemas/FieldValue' },
                            {
                              description:
                                "A value to use for the field if the field isn't specified for a document.",
                            },
                          ],
                        },
                        SourceFields: {
                          allOf: [
                            { $ref: '#/components/schemas/FieldNameCommaList' },
                            { description: 'A list of source fields to map to the field. ' },
                          ],
                        },
                        FacetEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether facet information can be returned for the field.',
                            },
                          ],
                        },
                        SearchEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            { description: 'Whether the contents of the field are searchable.' },
                          ],
                        },
                        ReturnEnabled: {
                          allOf: [
                            { $ref: '#/components/schemas/Boolean' },
                            {
                              description:
                                'Whether the contents of the field can be returned in the search results.',
                            },
                          ],
                        },
                      },
                      description:
                        'Options for a field that contains an array of dates. Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default.',
                    },
                  },
                  description:
                    'Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.',
                },
              },
              required: ['IndexFieldName', 'IndexFieldType'],
              description:
                'Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.',
            }),
          Action: z
            .literal('DefineIndexField')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['DefineIndexField'] },
              },
            }),
          Version: z
            .literal('2013-01-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2013-01-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DefineIndexFieldResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postActionDefineIndexFieldRoute = createRoute({
  method: 'post',
  path: '/#Action=DefineIndexField',
  description:
    'Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. ',
  operationId: 'POST_DefineIndexField',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DefineIndexField')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DefineIndexField'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DefineIndexFieldRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DefineIndexFieldResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getActionDefineSuggesterRoute = createRoute({
  method: 'get',
  path: '/#Action=DefineSuggester',
  description:
    'Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'GET_DefineSuggester',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['SuggesterName', ['Suggester']],
          ['DocumentSuggesterOptions', ['Suggester']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          DomainName: z
            .string()
            .regex(/[a-z][a-z0-9\-]+/)
            .min(3)
            .max(28)
            .openapi({
              param: {
                name: 'DomainName',
                in: 'query',
                required: true,
                description: '',
                schema: {
                  type: 'string',
                  pattern: '[a-z][a-z0-9\\-]+',
                  description:
                    'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
                  minLength: 3,
                  maxLength: 28,
                },
              },
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
            }),
          Suggester: z
            .object({
              SuggesterName: StandardNameSchema,
              DocumentSuggesterOptions: DocumentSuggesterOptionsSchema,
            })
            .openapi({
              param: {
                name: 'Suggester',
                in: 'query',
                required: true,
                description: '',
                schema: {
                  type: 'object',
                  required: ['SuggesterName', 'DocumentSuggesterOptions'],
                  properties: {
                    SuggesterName: { $ref: '#/components/schemas/StandardName' },
                    DocumentSuggesterOptions: {
                      $ref: '#/components/schemas/DocumentSuggesterOptions',
                    },
                  },
                  description:
                    'Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. ',
                },
              },
              required: ['SuggesterName', 'DocumentSuggesterOptions'],
              description:
                'Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. ',
            }),
          Action: z
            .literal('DefineSuggester')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['DefineSuggester'] },
              },
            }),
          Version: z
            .literal('2013-01-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2013-01-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DefineSuggesterResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postActionDefineSuggesterRoute = createRoute({
  method: 'post',
  path: '/#Action=DefineSuggester',
  description:
    'Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'POST_DefineSuggester',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DefineSuggester')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DefineSuggester'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DefineSuggesterRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DefineSuggesterResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getActionDeleteAnalysisSchemeRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteAnalysisScheme',
  description:
    'Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>. ',
  operationId: 'GET_DeleteAnalysisScheme',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
      AnalysisSchemeName: z
        .string()
        .regex(/[a-z][a-z0-9_]*/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'AnalysisSchemeName',
            in: 'query',
            required: true,
            description: 'The name of the analysis scheme you want to delete.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9_]*',
              description:
                'Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).',
              minLength: 1,
              maxLength: 64,
            },
          },
          description:
            'Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).',
        }),
      Action: z
        .literal('DeleteAnalysisScheme')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteAnalysisScheme'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteAnalysisSchemeResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postActionDeleteAnalysisSchemeRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteAnalysisScheme',
  description:
    'Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>. ',
  operationId: 'POST_DeleteAnalysisScheme',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DeleteAnalysisScheme')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteAnalysisScheme'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteAnalysisSchemeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteAnalysisSchemeResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getActionDeleteDomainRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteDomain',
  description:
    'Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html" target="_blank">Deleting a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. ',
  operationId: 'GET_DeleteDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description: 'The name of the domain you want to permanently delete.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
      Action: z
        .literal('DeleteDomain')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteDomain'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteDomainResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
  },
})

export const postActionDeleteDomainRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteDomain',
  description:
    'Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html" target="_blank">Deleting a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. ',
  operationId: 'POST_DeleteDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DeleteDomain')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteDomain'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteDomainRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteDomainResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
  },
})

export const getActionDeleteExpressionRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteExpression',
  description:
    'Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'GET_DeleteExpression',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
      ExpressionName: z
        .string()
        .regex(/[a-z][a-z0-9_]*/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'ExpressionName',
            in: 'query',
            required: true,
            description: 'The name of the <code><a>Expression</a></code> to delete.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9_]*',
              description:
                'Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).',
              minLength: 1,
              maxLength: 64,
            },
          },
          description:
            'Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).',
        }),
      Action: z
        .literal('DeleteExpression')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteExpression'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteExpressionResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postActionDeleteExpressionRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteExpression',
  description:
    'Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'POST_DeleteExpression',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DeleteExpression')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteExpression'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteExpressionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteExpressionResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getActionDeleteIndexFieldRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteIndexField',
  description:
    'Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'GET_DeleteIndexField',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
      IndexFieldName: z
        .string()
        .regex(/([a-z][a-z0-9_]*\*?|\*[a-z0-9_]*)/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'IndexFieldName',
            in: 'query',
            required: true,
            description:
              "The name of the index field your want to remove from the domain's indexing options.",
            schema: {
              type: 'string',
              pattern: '([a-z][a-z0-9_]*\\*?|\\*[a-z0-9_]*)',
              minLength: 1,
              maxLength: 64,
            },
          },
        }),
      Action: z
        .literal('DeleteIndexField')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteIndexField'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteIndexFieldResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postActionDeleteIndexFieldRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteIndexField',
  description:
    'Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'POST_DeleteIndexField',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DeleteIndexField')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteIndexField'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteIndexFieldRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteIndexFieldResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getActionDeleteSuggesterRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteSuggester',
  description:
    'Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'GET_DeleteSuggester',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
      SuggesterName: z
        .string()
        .regex(/[a-z][a-z0-9_]*/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'SuggesterName',
            in: 'query',
            required: true,
            description: 'Specifies the name of the suggester you want to delete.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9_]*',
              description:
                'Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).',
              minLength: 1,
              maxLength: 64,
            },
          },
          description:
            'Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).',
        }),
      Action: z
        .literal('DeleteSuggester')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteSuggester'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteSuggesterResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postActionDeleteSuggesterRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteSuggester',
  description:
    'Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'POST_DeleteSuggester',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DeleteSuggester')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteSuggester'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteSuggesterRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteSuggesterResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getActionDescribeAnalysisSchemesRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeAnalysisSchemes',
  description:
    'Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'GET_DescribeAnalysisSchemes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description: 'The name of the domain you want to describe.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
      AnalysisSchemeNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StandardNameSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'AnalysisSchemeNames',
            in: 'query',
            required: false,
            description: 'The analysis schemes you want to describe.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/StandardName' } },
          },
        }),
      Deployed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'Deployed',
            in: 'query',
            required: false,
            description:
              'Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('DescribeAnalysisSchemes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeAnalysisSchemes'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeAnalysisSchemesResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postActionDescribeAnalysisSchemesRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeAnalysisSchemes',
  description:
    'Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'POST_DescribeAnalysisSchemes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DescribeAnalysisSchemes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeAnalysisSchemes'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeAnalysisSchemesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeAnalysisSchemesResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getActionDescribeAvailabilityOptionsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeAvailabilityOptions',
  description:
    'Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'GET_DescribeAvailabilityOptions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description: 'The name of the domain you want to describe.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
      Deployed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'Deployed',
            in: 'query',
            required: false,
            description:
              'Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('DescribeAvailabilityOptions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeAvailabilityOptions'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeAvailabilityOptionsResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'DisabledOperationException',
      content: { 'text/xml': { schema: DisabledOperationExceptionSchema } },
    },
  },
})

export const postActionDescribeAvailabilityOptionsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeAvailabilityOptions',
  description:
    'Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'POST_DescribeAvailabilityOptions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DescribeAvailabilityOptions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeAvailabilityOptions'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeAvailabilityOptionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeAvailabilityOptionsResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'DisabledOperationException',
      content: { 'text/xml': { schema: DisabledOperationExceptionSchema } },
    },
  },
})

export const getActionDescribeDomainEndpointOptionsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeDomainEndpointOptions',
  description:
    'Returns the domain\'s endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'GET_DescribeDomainEndpointOptions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description: 'A string that represents the name of a domain.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
      Deployed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'Deployed',
            in: 'query',
            required: false,
            description:
              'Whether to retrieve the latest configuration (which might be in a Processing state) or the current, active configuration. Defaults to <code>false</code>.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('DescribeDomainEndpointOptions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDomainEndpointOptions'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeDomainEndpointOptionsResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'DisabledOperationException',
      content: { 'text/xml': { schema: DisabledOperationExceptionSchema } },
    },
  },
})

export const postActionDescribeDomainEndpointOptionsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeDomainEndpointOptions',
  description:
    'Returns the domain\'s endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'POST_DescribeDomainEndpointOptions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DescribeDomainEndpointOptions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDomainEndpointOptions'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeDomainEndpointOptionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeDomainEndpointOptionsResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'DisabledOperationException',
      content: { 'text/xml': { schema: DisabledOperationExceptionSchema } },
    },
  },
})

export const getActionDescribeDomainsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeDomains',
  description:
    'Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain\'s search endpoint: <code>q=matchall&amp;amp;q.parser=structured&amp;amp;size=0</code>. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'GET_DescribeDomains',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      DomainNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(DomainNameSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'DomainNames',
            in: 'query',
            required: false,
            description: 'The names of the domains you want to include in the response.',
            schema: {
              type: 'array',
              description: 'A list of domain names.',
              items: { $ref: '#/components/schemas/DomainName' },
            },
          },
          description: 'A list of domain names.',
        }),
      Action: z
        .literal('DescribeDomains')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDomains'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeDomainsResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
  },
})

export const postActionDescribeDomainsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeDomains',
  description:
    'Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain\'s search endpoint: <code>q=matchall&amp;amp;q.parser=structured&amp;amp;size=0</code>. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'POST_DescribeDomains',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DescribeDomains')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDomains'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeDomainsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeDomainsResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
  },
})

export const getActionDescribeExpressionsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeExpressions',
  description:
    'Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'GET_DescribeExpressions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description: 'The name of the domain you want to describe.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
      ExpressionNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StandardNameSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ExpressionNames',
            in: 'query',
            required: false,
            description:
              'Limits the <code><a>DescribeExpressions</a></code> response to the specified expressions. If not specified, all expressions are shown.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/StandardName' } },
          },
        }),
      Deployed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'Deployed',
            in: 'query',
            required: false,
            description:
              'Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('DescribeExpressions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeExpressions'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeExpressionsResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postActionDescribeExpressionsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeExpressions',
  description:
    'Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'POST_DescribeExpressions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DescribeExpressions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeExpressions'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeExpressionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeExpressionsResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getActionDescribeIndexFieldsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeIndexFields',
  description:
    'Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'GET_DescribeIndexFields',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description: 'The name of the domain you want to describe.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
      FieldNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(DynamicFieldNameSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'FieldNames',
            in: 'query',
            required: false,
            description:
              'A list of the index fields you want to describe. If not specified, information is returned for all configured index fields.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/DynamicFieldName' } },
          },
        }),
      Deployed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'Deployed',
            in: 'query',
            required: false,
            description:
              'Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('DescribeIndexFields')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeIndexFields'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeIndexFieldsResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postActionDescribeIndexFieldsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeIndexFields',
  description:
    'Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'POST_DescribeIndexFields',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DescribeIndexFields')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeIndexFields'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeIndexFieldsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeIndexFieldsResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getActionDescribeScalingParametersRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeScalingParameters',
  description:
    'Gets the scaling parameters configured for a domain. A domain\'s scaling parameters specify the desired search instance type and replication count. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'GET_DescribeScalingParameters',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
      Action: z
        .literal('DescribeScalingParameters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeScalingParameters'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeScalingParametersResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postActionDescribeScalingParametersRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeScalingParameters',
  description:
    'Gets the scaling parameters configured for a domain. A domain\'s scaling parameters specify the desired search instance type and replication count. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'POST_DescribeScalingParameters',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DescribeScalingParameters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeScalingParameters'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeScalingParametersRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeScalingParametersResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getActionDescribeServiceAccessPoliciesRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeServiceAccessPolicies',
  description:
    'Gets information about the access policies that control access to the domain\'s document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'GET_DescribeServiceAccessPolicies',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description: 'The name of the domain you want to describe.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
      Deployed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'Deployed',
            in: 'query',
            required: false,
            description:
              'Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('DescribeServiceAccessPolicies')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeServiceAccessPolicies'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeServiceAccessPoliciesResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postActionDescribeServiceAccessPoliciesRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeServiceAccessPolicies',
  description:
    'Gets information about the access policies that control access to the domain\'s document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'POST_DescribeServiceAccessPolicies',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DescribeServiceAccessPolicies')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeServiceAccessPolicies'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeServiceAccessPoliciesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeServiceAccessPoliciesResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getActionDescribeSuggestersRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeSuggesters',
  description:
    'Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'GET_DescribeSuggesters',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description: 'The name of the domain you want to describe.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
      SuggesterNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StandardNameSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'SuggesterNames',
            in: 'query',
            required: false,
            description: 'The suggesters you want to describe.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/StandardName' } },
          },
        }),
      Deployed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'Deployed',
            in: 'query',
            required: false,
            description:
              'Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('DescribeSuggesters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeSuggesters'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeSuggestersResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postActionDescribeSuggestersRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeSuggesters',
  description:
    'Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'POST_DescribeSuggesters',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DescribeSuggesters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeSuggesters'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeSuggestersRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeSuggestersResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getActionIndexDocumentsRoute = createRoute({
  method: 'get',
  path: '/#Action=IndexDocuments',
  description:
    'Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is <code>RequiresIndexDocuments</code>.',
  operationId: 'GET_IndexDocuments',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
      Action: z
        .literal('IndexDocuments')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['IndexDocuments'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: IndexDocumentsResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postActionIndexDocumentsRoute = createRoute({
  method: 'post',
  path: '/#Action=IndexDocuments',
  description:
    'Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is <code>RequiresIndexDocuments</code>.',
  operationId: 'POST_IndexDocuments',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('IndexDocuments')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['IndexDocuments'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: IndexDocumentsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: IndexDocumentsResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getActionListDomainNamesRoute = createRoute({
  method: 'get',
  path: '/#Action=ListDomainNames',
  description: 'Lists all search domains owned by an account.',
  operationId: 'GET_ListDomainNames',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('ListDomainNames')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListDomainNames'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListDomainNamesResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
  },
})

export const postActionListDomainNamesRoute = createRoute({
  method: 'post',
  path: '/#Action=ListDomainNames',
  description: 'Lists all search domains owned by an account.',
  operationId: 'POST_ListDomainNames',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('ListDomainNames')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListDomainNames'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListDomainNamesResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
  },
})

export const getActionUpdateAvailabilityOptionsRoute = createRoute({
  method: 'get',
  path: '/#Action=UpdateAvailabilityOptions',
  description:
    'Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'GET_UpdateAvailabilityOptions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
      MultiAZ: z
        .stringbool()
        .openapi({
          param: {
            name: 'MultiAZ',
            in: 'query',
            required: true,
            description:
              'You expand an existing search domain to a second Availability Zone by setting the Multi-AZ option to true. Similarly, you can turn off the Multi-AZ option to downgrade the domain to a single Availability Zone by setting the Multi-AZ option to <code>false</code>. ',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('UpdateAvailabilityOptions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateAvailabilityOptions'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateAvailabilityOptionsResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'DisabledOperationException',
      content: { 'text/xml': { schema: DisabledOperationExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postActionUpdateAvailabilityOptionsRoute = createRoute({
  method: 'post',
  path: '/#Action=UpdateAvailabilityOptions',
  description:
    'Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'POST_UpdateAvailabilityOptions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('UpdateAvailabilityOptions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateAvailabilityOptions'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: UpdateAvailabilityOptionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateAvailabilityOptionsResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'DisabledOperationException',
      content: { 'text/xml': { schema: DisabledOperationExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getActionUpdateDomainEndpointOptionsRoute = createRoute({
  method: 'get',
  path: '/#Action=UpdateDomainEndpointOptions',
  description:
    'Updates the domain\'s endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'GET_UpdateDomainEndpointOptions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['EnforceHTTPS', ['DomainEndpointOptions']],
          ['TLSSecurityPolicy', ['DomainEndpointOptions']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          DomainName: z
            .string()
            .regex(/[a-z][a-z0-9\-]+/)
            .min(3)
            .max(28)
            .openapi({
              param: {
                name: 'DomainName',
                in: 'query',
                required: true,
                description: 'A string that represents the name of a domain.',
                schema: {
                  type: 'string',
                  pattern: '[a-z][a-z0-9\\-]+',
                  description:
                    'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
                  minLength: 3,
                  maxLength: 28,
                },
              },
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
            }),
          DomainEndpointOptions: z
            .object({
              EnforceHTTPS: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  BooleanSchema,
                )
                .and(z.any().openapi({ description: 'Whether the domain is HTTPS only enabled.' }))
                .exactOptional(),
              TLSSecurityPolicy: TLSSecurityPolicySchema.and(
                z.any().openapi({ description: 'The minimum required TLS version' }),
              ).exactOptional(),
            })
            .openapi({
              param: {
                name: 'DomainEndpointOptions',
                in: 'query',
                required: true,
                description:
                  'Whether to require that all requests to the domain arrive over HTTPS. We recommend Policy-Min-TLS-1-2-2019-07 for TLSSecurityPolicy. For compatibility with older clients, the default is Policy-Min-TLS-1-0-2019-07. ',
                schema: {
                  type: 'object',
                  properties: {
                    EnforceHTTPS: {
                      allOf: [
                        { $ref: '#/components/schemas/Boolean' },
                        { description: 'Whether the domain is HTTPS only enabled.' },
                      ],
                    },
                    TLSSecurityPolicy: {
                      allOf: [
                        { $ref: '#/components/schemas/TLSSecurityPolicy' },
                        { description: 'The minimum required TLS version' },
                      ],
                    },
                  },
                  description: "The domain's endpoint options.",
                },
              },
              description: "The domain's endpoint options.",
              required: [],
            }),
          Action: z
            .literal('UpdateDomainEndpointOptions')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['UpdateDomainEndpointOptions'] },
              },
            }),
          Version: z
            .literal('2013-01-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2013-01-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateDomainEndpointOptionsResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'DisabledOperationException',
      content: { 'text/xml': { schema: DisabledOperationExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postActionUpdateDomainEndpointOptionsRoute = createRoute({
  method: 'post',
  path: '/#Action=UpdateDomainEndpointOptions',
  description:
    'Updates the domain\'s endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.',
  operationId: 'POST_UpdateDomainEndpointOptions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('UpdateDomainEndpointOptions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateDomainEndpointOptions'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: UpdateDomainEndpointOptionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateDomainEndpointOptionsResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'DisabledOperationException',
      content: { 'text/xml': { schema: DisabledOperationExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getActionUpdateScalingParametersRoute = createRoute({
  method: 'get',
  path: '/#Action=UpdateScalingParameters',
  description:
    'Configures scaling parameters for a domain. A domain\'s scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>. ',
  operationId: 'GET_UpdateScalingParameters',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['DesiredInstanceType', ['ScalingParameters']],
          ['DesiredReplicationCount', ['ScalingParameters']],
          ['DesiredPartitionCount', ['ScalingParameters']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          DomainName: z
            .string()
            .regex(/[a-z][a-z0-9\-]+/)
            .min(3)
            .max(28)
            .openapi({
              param: {
                name: 'DomainName',
                in: 'query',
                required: true,
                description: '',
                schema: {
                  type: 'string',
                  pattern: '[a-z][a-z0-9\\-]+',
                  description:
                    'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
                  minLength: 3,
                  maxLength: 28,
                },
              },
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
            }),
          ScalingParameters: z
            .object({
              DesiredInstanceType: PartitionInstanceTypeSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'The instance type that you want to preconfigure for your domain. For example, <code>search.m1.small</code>.',
                  }),
              ).exactOptional(),
              DesiredReplicationCount: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  UIntValueSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The number of replicas you want to preconfigure for each index partition.',
                    }),
                )
                .exactOptional(),
              DesiredPartitionCount: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  UIntValueSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The number of partitions you want to preconfigure for your domain. Only valid when you select <code>m2.2xlarge</code> as the desired instance type.',
                    }),
                )
                .exactOptional(),
            })
            .openapi({
              param: {
                name: 'ScalingParameters',
                in: 'query',
                required: true,
                description: '',
                schema: {
                  type: 'object',
                  properties: {
                    DesiredInstanceType: {
                      allOf: [
                        { $ref: '#/components/schemas/PartitionInstanceType' },
                        {
                          description:
                            'The instance type that you want to preconfigure for your domain. For example, <code>search.m1.small</code>.',
                        },
                      ],
                    },
                    DesiredReplicationCount: {
                      allOf: [
                        { $ref: '#/components/schemas/UIntValue' },
                        {
                          description:
                            'The number of replicas you want to preconfigure for each index partition.',
                        },
                      ],
                    },
                    DesiredPartitionCount: {
                      allOf: [
                        { $ref: '#/components/schemas/UIntValue' },
                        {
                          description:
                            'The number of partitions you want to preconfigure for your domain. Only valid when you select <code>m2.2xlarge</code> as the desired instance type.',
                        },
                      ],
                    },
                  },
                  description:
                    'The desired instance type and desired number of replicas of each index partition.',
                },
              },
              description:
                'The desired instance type and desired number of replicas of each index partition.',
              required: [],
            }),
          Action: z
            .literal('UpdateScalingParameters')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['UpdateScalingParameters'] },
              },
            }),
          Version: z
            .literal('2013-01-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2013-01-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateScalingParametersResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postActionUpdateScalingParametersRoute = createRoute({
  method: 'post',
  path: '/#Action=UpdateScalingParameters',
  description:
    'Configures scaling parameters for a domain. A domain\'s scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>. ',
  operationId: 'POST_UpdateScalingParameters',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('UpdateScalingParameters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateScalingParameters'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: UpdateScalingParametersRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateScalingParametersResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getActionUpdateServiceAccessPoliciesRoute = createRoute({
  method: 'get',
  path: '/#Action=UpdateServiceAccessPolicies',
  description:
    'Configures the access rules that control access to the domain\'s document and search endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank"> Configuring Access for an Amazon CloudSearch Domain</a>.',
  operationId: 'GET_UpdateServiceAccessPolicies',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      DomainName: z
        .string()
        .regex(/[a-z][a-z0-9\-]+/)
        .min(3)
        .max(28)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'query',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]+',
              description:
                'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
              minLength: 3,
              maxLength: 28,
            },
          },
          description:
            'A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).',
        }),
      AccessPolicies: z
        .string()
        .openapi({
          param: {
            name: 'AccessPolicies',
            in: 'query',
            required: true,
            description:
              'The access rules you want to configure. These rules replace any existing rules. ',
            schema: {
              type: 'string',
              description:
                'Access rules for a domain\'s document or search service endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. The maximum size of a policy document is 100 KB.',
            },
          },
          description:
            'Access rules for a domain\'s document or search service endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. The maximum size of a policy document is 100 KB.',
        }),
      Action: z
        .literal('UpdateServiceAccessPolicies')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateServiceAccessPolicies'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateServiceAccessPoliciesResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postActionUpdateServiceAccessPoliciesRoute = createRoute({
  method: 'post',
  path: '/#Action=UpdateServiceAccessPolicies',
  description:
    'Configures the access rules that control access to the domain\'s document and search endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank"> Configuring Access for an Amazon CloudSearch Domain</a>.',
  operationId: 'POST_UpdateServiceAccessPolicies',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('UpdateServiceAccessPolicies')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateServiceAccessPolicies'] },
          },
        }),
      Version: z
        .literal('2013-01-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2013-01-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: UpdateServiceAccessPoliciesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateServiceAccessPoliciesResponseSchema } },
    },
    480: { description: 'BaseException', content: { 'text/xml': { schema: BaseExceptionSchema } } },
    481: {
      description: 'InternalException',
      content: { 'text/xml': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InvalidTypeException',
      content: { 'text/xml': { schema: InvalidTypeExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})
