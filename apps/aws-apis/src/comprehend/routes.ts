import { createRoute, z } from '@hono/zod-openapi'

const IntegerSchema = z.int().openapi('Integer')

const StringSchema = z.string().min(1).openapi('String')

const FloatSchema = z.float32().openapi('Float')

const DominantLanguageSchema = z
  .object({
    LanguageCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The RFC 5646 language code for the dominant language. For more information about RFC 5646, see <a href="https://tools.ietf.org/html/rfc5646">Tags for Identifying Languages</a> on the <i>IETF Tools</i> web site.',
        }),
    ).exactOptional(),
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Amazon Comprehend has in the accuracy of the detection.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns the code for the dominant language in the input text and the level of confidence that Amazon Comprehend has in the accuracy of the detection.',
    required: [],
  })
  .openapi('DominantLanguage')

const ListOfDominantLanguagesSchema = z
  .array(DominantLanguageSchema)
  .openapi('ListOfDominantLanguages')

const BatchDetectDominantLanguageItemResultSchema = z
  .object({
    Index: IntegerSchema.and(
      z.any().openapi({ description: 'The zero-based index of the document in the input list.' }),
    ).exactOptional(),
    Languages: ListOfDominantLanguagesSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more <a>DominantLanguage</a> objects describing the dominant languages in the document.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.',
    required: [],
  })
  .openapi('BatchDetectDominantLanguageItemResult')

const ListOfDetectDominantLanguageResultSchema = z
  .array(BatchDetectDominantLanguageItemResultSchema)
  .openapi('ListOfDetectDominantLanguageResult')

const BatchItemErrorSchema = z
  .object({
    Index: IntegerSchema.and(
      z.any().openapi({ description: 'The zero-based index of the document in the input list.' }),
    ).exactOptional(),
    ErrorCode: StringSchema.and(
      z.any().openapi({ description: 'The numeric error code of the error.' }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z.any().openapi({ description: 'A text description of the error.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes an error that occurred while processing a document in a batch. The operation returns on <code>BatchItemError</code> object for each document that contained an error.',
    required: [],
  })
  .openapi('BatchItemError')

const BatchItemErrorListSchema = z.array(BatchItemErrorSchema).openapi('BatchItemErrorList')

const BatchDetectDominantLanguageResponseSchema = z
  .object({
    ResultList: ListOfDetectDominantLanguageResultSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of objects containing the results of the operation. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If all of the documents contain an error, the <code>ResultList</code> is empty.',
        }),
    ),
    ErrorList: BatchItemErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list containing one object for each document that contained an error. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If there are no errors in the batch, the <code>ErrorList</code> is empty.',
        }),
    ),
  })
  .openapi({ required: ['ResultList', 'ErrorList'] })
  .openapi('BatchDetectDominantLanguageResponse')

const CustomerInputStringSchema = z.string().min(1).openapi('CustomerInputString')

const CustomerInputStringListSchema = z
  .array(CustomerInputStringSchema)
  .min(1)
  .openapi('CustomerInputStringList')

const BatchDetectDominantLanguageRequestSchema = z
  .object({
    TextList: CustomerInputStringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. Each document should contain at least 20 characters. The maximum size of each document is 5 KB.',
        }),
    ),
  })
  .openapi({ required: ['TextList'], title: 'BatchDetectDominantLanguageRequest' })
  .openapi('BatchDetectDominantLanguageRequest')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const TextSizeLimitExceededExceptionSchema = z.any().openapi('TextSizeLimitExceededException')

const BatchSizeLimitExceededExceptionSchema = z.any().openapi('BatchSizeLimitExceededException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const EntityTypeSchema = z
  .enum([
    'PERSON',
    'LOCATION',
    'ORGANIZATION',
    'COMMERCIAL_ITEM',
    'EVENT',
    'DATE',
    'QUANTITY',
    'TITLE',
    'OTHER',
  ])
  .openapi('EntityType')

const ChildBlockSchema = z
  .object({
    ChildBlockId: StringSchema.and(
      z.any().openapi({ description: 'Unique identifier for the child block.' }),
    ).exactOptional(),
    BeginOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'Offset of the start of the child block within its parent block.',
        }),
    ).exactOptional(),
    EndOffset: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'Offset of the end of the child block within its parent block.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Nested block contained within a block.', required: [] })
  .openapi('ChildBlock')

const ListOfChildBlocksSchema = z.array(ChildBlockSchema).openapi('ListOfChildBlocks')

const BlockReferenceSchema = z
  .object({
    BlockId: StringSchema.and(
      z.any().openapi({ description: 'Unique identifier for the block.' }),
    ).exactOptional(),
    BeginOffset: IntegerSchema.and(
      z.any().openapi({ description: 'Offset of the start of the block within its parent block.' }),
    ).exactOptional(),
    EndOffset: IntegerSchema.and(
      z.any().openapi({ description: 'Offset of the end of the block within its parent block.' }),
    ).exactOptional(),
    ChildBlocks: ListOfChildBlocksSchema.and(
      z.any().openapi({ description: 'List of child blocks within this block.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A reference to a block. ', required: [] })
  .openapi('BlockReference')

const ListOfBlockReferencesSchema = z.array(BlockReferenceSchema).openapi('ListOfBlockReferences')

const EntitySchema = z
  .object({
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Amazon Comprehend has in the accuracy of the detection.',
        }),
    ).exactOptional(),
    Type: EntityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The entity type. For entity detection using the built-in model, this field contains one of the standard entity types listed below.</p> <p>For custom entity detection, this field contains one of the entity types that you specified when you trained your custom model.</p>',
        }),
    ).exactOptional(),
    Text: StringSchema.and(
      z.any().openapi({ description: 'The text of the entity.' }),
    ).exactOptional(),
    BeginOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The zero-based offset from the beginning of the source text to the first character in the entity.</p> <p>This field is empty for non-text input.</p>',
        }),
    ).exactOptional(),
    EndOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The zero-based offset from the beginning of the source text to the last character in the entity.</p> <p>This field is empty for non-text input.</p>',
        }),
    ).exactOptional(),
    BlockReferences: ListOfBlockReferencesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A reference to each block for this entity. This field is empty for plain-text input.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p>Provides information about an entity. </p> <p> </p>', required: [] })
  .openapi('Entity')

const ListOfEntitiesSchema = z.array(EntitySchema).openapi('ListOfEntities')

const BatchDetectEntitiesItemResultSchema = z
  .object({
    Index: IntegerSchema.and(
      z.any().openapi({ description: 'The zero-based index of the document in the input list.' }),
    ).exactOptional(),
    Entities: ListOfEntitiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more <a>Entity</a> objects, one for each entity detected in the document.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.',
    required: [],
  })
  .openapi('BatchDetectEntitiesItemResult')

const ListOfDetectEntitiesResultSchema = z
  .array(BatchDetectEntitiesItemResultSchema)
  .openapi('ListOfDetectEntitiesResult')

const BatchDetectEntitiesResponseSchema = z
  .object({
    ResultList: ListOfDetectEntitiesResultSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of objects containing the results of the operation. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If all of the documents contain an error, the <code>ResultList</code> is empty.',
        }),
    ),
    ErrorList: BatchItemErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list containing one object for each document that contained an error. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If there are no errors in the batch, the <code>ErrorList</code> is empty.',
        }),
    ),
  })
  .openapi({ required: ['ResultList', 'ErrorList'] })
  .openapi('BatchDetectEntitiesResponse')

const LanguageCodeSchema = z
  .enum(['en', 'es', 'fr', 'de', 'it', 'pt', 'ar', 'hi', 'ja', 'ko', 'zh', 'zh-TW'])
  .openapi('LanguageCode')

const BatchDetectEntitiesRequestSchema = z
  .object({
    TextList: CustomerInputStringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. The maximum size of each document is 5 KB.',
        }),
    ),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language.',
        }),
    ),
  })
  .openapi({ required: ['TextList', 'LanguageCode'], title: 'BatchDetectEntitiesRequest' })
  .openapi('BatchDetectEntitiesRequest')

const UnsupportedLanguageExceptionSchema = z.any().openapi('UnsupportedLanguageException')

const KeyPhraseSchema = z
  .object({
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Amazon Comprehend has in the accuracy of the detection.',
        }),
    ).exactOptional(),
    Text: StringSchema.and(
      z.any().openapi({ description: 'The text of a key noun phrase.' }),
    ).exactOptional(),
    BeginOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The zero-based offset from the beginning of the source text to the first character in the key phrase.',
        }),
    ).exactOptional(),
    EndOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The zero-based offset from the beginning of the source text to the last character in the key phrase.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a key noun phrase.', required: [] })
  .openapi('KeyPhrase')

const ListOfKeyPhrasesSchema = z.array(KeyPhraseSchema).openapi('ListOfKeyPhrases')

const BatchDetectKeyPhrasesItemResultSchema = z
  .object({
    Index: IntegerSchema.and(
      z.any().openapi({ description: 'The zero-based index of the document in the input list.' }),
    ).exactOptional(),
    KeyPhrases: ListOfKeyPhrasesSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more <a>KeyPhrase</a> objects, one for each key phrase detected in the document.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.',
    required: [],
  })
  .openapi('BatchDetectKeyPhrasesItemResult')

const ListOfDetectKeyPhrasesResultSchema = z
  .array(BatchDetectKeyPhrasesItemResultSchema)
  .openapi('ListOfDetectKeyPhrasesResult')

const BatchDetectKeyPhrasesResponseSchema = z
  .object({
    ResultList: ListOfDetectKeyPhrasesResultSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of objects containing the results of the operation. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If all of the documents contain an error, the <code>ResultList</code> is empty.',
        }),
    ),
    ErrorList: BatchItemErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list containing one object for each document that contained an error. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If there are no errors in the batch, the <code>ErrorList</code> is empty.',
        }),
    ),
  })
  .openapi({ required: ['ResultList', 'ErrorList'] })
  .openapi('BatchDetectKeyPhrasesResponse')

const BatchDetectKeyPhrasesRequestSchema = z
  .object({
    TextList: CustomerInputStringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. The maximum size of each document is 5 KB.',
        }),
    ),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language.',
        }),
    ),
  })
  .openapi({ required: ['TextList', 'LanguageCode'], title: 'BatchDetectKeyPhrasesRequest' })
  .openapi('BatchDetectKeyPhrasesRequest')

const SentimentTypeSchema = z
  .enum(['POSITIVE', 'NEGATIVE', 'NEUTRAL', 'MIXED'])
  .openapi('SentimentType')

const SentimentScoreSchema = z
  .object({
    Positive: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Amazon Comprehend has in the accuracy of its detection of the <code>POSITIVE</code> sentiment.',
        }),
    ).exactOptional(),
    Negative: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Amazon Comprehend has in the accuracy of its detection of the <code>NEGATIVE</code> sentiment.',
        }),
    ).exactOptional(),
    Neutral: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Amazon Comprehend has in the accuracy of its detection of the <code>NEUTRAL</code> sentiment.',
        }),
    ).exactOptional(),
    Mixed: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Amazon Comprehend has in the accuracy of its detection of the <code>MIXED</code> sentiment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of sentiments.',
    required: [],
  })
  .openapi('SentimentScore')

const BatchDetectSentimentItemResultSchema = z
  .object({
    Index: IntegerSchema.and(
      z.any().openapi({ description: 'The zero-based index of the document in the input list.' }),
    ).exactOptional(),
    Sentiment: SentimentTypeSchema.and(
      z.any().openapi({ description: 'The sentiment detected in the document.' }),
    ).exactOptional(),
    SentimentScore: SentimentScoreSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Amazon Comprehend has in the accuracy of its sentiment detection.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.',
    required: [],
  })
  .openapi('BatchDetectSentimentItemResult')

const ListOfDetectSentimentResultSchema = z
  .array(BatchDetectSentimentItemResultSchema)
  .openapi('ListOfDetectSentimentResult')

const BatchDetectSentimentResponseSchema = z
  .object({
    ResultList: ListOfDetectSentimentResultSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of objects containing the results of the operation. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If all of the documents contain an error, the <code>ResultList</code> is empty.',
        }),
    ),
    ErrorList: BatchItemErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list containing one object for each document that contained an error. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If there are no errors in the batch, the <code>ErrorList</code> is empty.',
        }),
    ),
  })
  .openapi({ required: ['ResultList', 'ErrorList'] })
  .openapi('BatchDetectSentimentResponse')

const BatchDetectSentimentRequestSchema = z
  .object({
    TextList: CustomerInputStringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. The maximum size of each document is 5 KB. ',
        }),
    ),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language.',
        }),
    ),
  })
  .openapi({ required: ['TextList', 'LanguageCode'], title: 'BatchDetectSentimentRequest' })
  .openapi('BatchDetectSentimentRequest')

const PartOfSpeechTagTypeSchema = z
  .enum([
    'ADJ',
    'ADP',
    'ADV',
    'AUX',
    'CONJ',
    'CCONJ',
    'DET',
    'INTJ',
    'NOUN',
    'NUM',
    'O',
    'PART',
    'PRON',
    'PROPN',
    'PUNCT',
    'SCONJ',
    'SYM',
    'VERB',
  ])
  .openapi('PartOfSpeechTagType')

const PartOfSpeechTagSchema = z
  .object({
    Tag: PartOfSpeechTagTypeSchema.and(
      z.any().openapi({ description: 'Identifies the part of speech that the token represents.' }),
    ).exactOptional(),
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The confidence that Amazon Comprehend has that the part of speech was correctly identified.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Identifies the part of speech represented by the token and gives the confidence that Amazon Comprehend has that the part of speech was correctly identified. For more information about the parts of speech that Amazon Comprehend can identify, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide. ',
    required: [],
  })
  .openapi('PartOfSpeechTag')

const SyntaxTokenSchema = z
  .object({
    TokenId: IntegerSchema.and(
      z.any().openapi({ description: 'A unique identifier for a token.' }),
    ).exactOptional(),
    Text: StringSchema.and(
      z.any().openapi({ description: 'The word that was recognized in the source text.' }),
    ).exactOptional(),
    BeginOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The zero-based offset from the beginning of the source text to the first character in the word.',
        }),
    ).exactOptional(),
    EndOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The zero-based offset from the beginning of the source text to the last character in the word.',
        }),
    ).exactOptional(),
    PartOfSpeech: PartOfSpeechTagSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the part of speech label and the confidence level that Amazon Comprehend has that the part of speech was correctly identified. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a work in the input text that was recognized and assigned a part of speech. There is one syntax token record for each word in the source text.',
    required: [],
  })
  .openapi('SyntaxToken')

const ListOfSyntaxTokensSchema = z.array(SyntaxTokenSchema).openapi('ListOfSyntaxTokens')

const BatchDetectSyntaxItemResultSchema = z
  .object({
    Index: IntegerSchema.and(
      z.any().openapi({ description: 'The zero-based index of the document in the input list.' }),
    ).exactOptional(),
    SyntaxTokens: ListOfSyntaxTokensSchema.and(
      z
        .any()
        .openapi({
          description: 'The syntax tokens for the words in the document, one token for each word.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of calling the operation. The operation returns one object that is successfully processed by the operation.',
    required: [],
  })
  .openapi('BatchDetectSyntaxItemResult')

const ListOfDetectSyntaxResultSchema = z
  .array(BatchDetectSyntaxItemResultSchema)
  .openapi('ListOfDetectSyntaxResult')

const BatchDetectSyntaxResponseSchema = z
  .object({
    ResultList: ListOfDetectSyntaxResultSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of objects containing the results of the operation. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If all of the documents contain an error, the <code>ResultList</code> is empty.',
        }),
    ),
    ErrorList: BatchItemErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list containing one object for each document that contained an error. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If there are no errors in the batch, the <code>ErrorList</code> is empty.',
        }),
    ),
  })
  .openapi({ required: ['ResultList', 'ErrorList'] })
  .openapi('BatchDetectSyntaxResponse')

const SyntaxLanguageCodeSchema = z
  .enum(['en', 'es', 'fr', 'de', 'it', 'pt'])
  .openapi('SyntaxLanguageCode')

const BatchDetectSyntaxRequestSchema = z
  .object({
    TextList: CustomerInputStringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. The maximum size for each document is 5 KB.',
        }),
    ),
    LanguageCode: SyntaxLanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language of the input documents. You can specify any of the following languages supported by Amazon Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"), Italian ("it"), or Portuguese ("pt"). All documents must be in the same language.',
        }),
    ),
  })
  .openapi({ required: ['TextList', 'LanguageCode'], title: 'BatchDetectSyntaxRequest' })
  .openapi('BatchDetectSyntaxRequest')

const ListOfDescriptiveMentionIndicesSchema = z
  .array(IntegerSchema)
  .openapi('ListOfDescriptiveMentionIndices')

const TargetedSentimentEntityTypeSchema = z
  .enum([
    'PERSON',
    'LOCATION',
    'ORGANIZATION',
    'FACILITY',
    'BRAND',
    'COMMERCIAL_ITEM',
    'MOVIE',
    'MUSIC',
    'BOOK',
    'SOFTWARE',
    'GAME',
    'PERSONAL_TITLE',
    'EVENT',
    'DATE',
    'QUANTITY',
    'ATTRIBUTE',
    'OTHER',
  ])
  .openapi('TargetedSentimentEntityType')

const MentionSentimentSchema = z
  .object({
    Sentiment: SentimentTypeSchema.and(
      z.any().openapi({ description: 'The sentiment of the mention. ' }),
    ).exactOptional(),
    SentimentScore: SentimentScoreSchema.exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains the sentiment and sentiment score for one mention of an entity.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>',
    required: [],
  })
  .openapi('MentionSentiment')

const TargetedSentimentMentionSchema = z
  .object({
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'Model confidence that the entity is relevant. Value range is zero to one, where one is highest confidence.',
        }),
    ).exactOptional(),
    GroupScore: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The confidence that all the entities mentioned in the group relate to the same entity.',
        }),
    ).exactOptional(),
    Text: StringSchema.and(
      z.any().openapi({ description: 'The text in the document that identifies the entity.' }),
    ).exactOptional(),
    Type: TargetedSentimentEntityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the entity. Amazon Comprehend supports a variety of <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html#how-targeted-sentiment-entities">entity types</a>.',
        }),
    ).exactOptional(),
    MentionSentiment: MentionSentimentSchema.and(
      z
        .any()
        .openapi({ description: 'Contains the sentiment and sentiment score for the mention.' }),
    ).exactOptional(),
    BeginOffset: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The offset into the document text where the mention begins.' }),
    ).exactOptional(),
    EndOffset: IntegerSchema.and(
      z.any().openapi({ description: 'The offset into the document text where the mention ends.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Information about one mention of an entity. The mention information includes the location of the mention in the text and the sentiment of the mention.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>',
    required: [],
  })
  .openapi('TargetedSentimentMention')

const ListOfMentionsSchema = z.array(TargetedSentimentMentionSchema).openapi('ListOfMentions')

const TargetedSentimentEntitySchema = z
  .object({
    DescriptiveMentionIndex: ListOfDescriptiveMentionIndicesSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more index into the Mentions array that provides the best name for the entity group.',
        }),
    ).exactOptional(),
    Mentions: ListOfMentionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of mentions of the entity in the document. The array represents a co-reference group. See <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html#how-targeted-sentiment-values"> Co-reference group</a> for an example. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Information about one of the entities found by targeted sentiment analysis.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>',
    required: [],
  })
  .openapi('TargetedSentimentEntity')

const ListOfTargetedSentimentEntitiesSchema = z
  .array(TargetedSentimentEntitySchema)
  .openapi('ListOfTargetedSentimentEntities')

const BatchDetectTargetedSentimentItemResultSchema = z
  .object({
    Index: IntegerSchema.and(
      z.any().openapi({ description: 'The zero-based index of this result in the input list.' }),
    ).exactOptional(),
    Entities: ListOfTargetedSentimentEntitiesSchema.and(
      z.any().openapi({ description: 'An array of targeted sentiment entities.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Analysis results for one of the documents in the batch.', required: [] })
  .openapi('BatchDetectTargetedSentimentItemResult')

const ListOfDetectTargetedSentimentResultSchema = z
  .array(BatchDetectTargetedSentimentItemResultSchema)
  .openapi('ListOfDetectTargetedSentimentResult')

const BatchDetectTargetedSentimentResponseSchema = z
  .object({
    ResultList: ListOfDetectTargetedSentimentResultSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of objects containing the results of the operation. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If all of the documents contain an error, the <code>ResultList</code> is empty.',
        }),
    ),
    ErrorList: BatchItemErrorListSchema.and(
      z.any().openapi({ description: 'List of errors that the operation can return.' }),
    ),
  })
  .openapi({ required: ['ResultList', 'ErrorList'] })
  .openapi('BatchDetectTargetedSentimentResponse')

const BatchDetectTargetedSentimentRequestSchema = z
  .object({
    TextList: CustomerInputStringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. The maximum size of each document is 5 KB.',
        }),
    ),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language of the input documents. Currently, English is the only supported language.',
        }),
    ),
  })
  .openapi({ required: ['TextList', 'LanguageCode'], title: 'BatchDetectTargetedSentimentRequest' })
  .openapi('BatchDetectTargetedSentimentRequest')

const DocumentClassSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the class.' }),
    ).exactOptional(),
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The confidence score that Amazon Comprehend has this class correctly attributed.',
        }),
    ).exactOptional(),
    Page: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Page number in the input document. This field is present in the response only if your request includes the <code>Byte</code> parameter. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies the class that categorizes the document being analyzed',
    required: [],
  })
  .openapi('DocumentClass')

const ListOfClassesSchema = z.array(DocumentClassSchema).openapi('ListOfClasses')

const DocumentLabelSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the label.' }),
    ).exactOptional(),
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The confidence score that Amazon Comprehend has this label correctly attributed.',
        }),
    ).exactOptional(),
    Page: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Page number where the label occurs. This field is present in the response only if your request includes the <code>Byte</code> parameter. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies one of the label or labels that categorize the document being analyzed.',
    required: [],
  })
  .openapi('DocumentLabel')

const ListOfLabelsSchema = z.array(DocumentLabelSchema).openapi('ListOfLabels')

const ExtractedCharactersListItemSchema = z
  .object({
    Page: IntegerSchema.and(z.any().openapi({ description: 'Page number.' })).exactOptional(),
    Count: IntegerSchema.and(
      z.any().openapi({ description: 'Number of characters extracted from each page.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Array of the number of characters extracted from each page.',
    required: [],
  })
  .openapi('ExtractedCharactersListItem')

const ListOfExtractedCharactersSchema = z
  .array(ExtractedCharactersListItemSchema)
  .openapi('ListOfExtractedCharacters')

const DocumentMetadataSchema = z
  .object({
    Pages: IntegerSchema.and(
      z.any().openapi({ description: 'Number of pages in the document.' }),
    ).exactOptional(),
    ExtractedCharacters: ListOfExtractedCharactersSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of pages in the document, with the number of characters extracted from each page.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the document, discovered during text extraction.',
    required: [],
  })
  .openapi('DocumentMetadata')

const DocumentTypeSchema = z
  .enum([
    'NATIVE_PDF',
    'SCANNED_PDF',
    'MS_WORD',
    'IMAGE',
    'PLAIN_TEXT',
    'TEXTRACT_DETECT_DOCUMENT_TEXT_JSON',
    'TEXTRACT_ANALYZE_DOCUMENT_JSON',
  ])
  .openapi('DocumentType')

const DocumentTypeListItemSchema = z
  .object({
    Page: IntegerSchema.and(z.any().openapi({ description: 'Page number.' })).exactOptional(),
    Type: DocumentTypeSchema.and(
      z.any().openapi({ description: 'Document type.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Document type for each page in the document.', required: [] })
  .openapi('DocumentTypeListItem')

const ListOfDocumentTypeSchema = z.array(DocumentTypeListItemSchema).openapi('ListOfDocumentType')

const PageBasedErrorCodeSchema = z
  .enum([
    'TEXTRACT_BAD_PAGE',
    'TEXTRACT_PROVISIONED_THROUGHPUT_EXCEEDED',
    'PAGE_CHARACTERS_EXCEEDED',
    'PAGE_SIZE_EXCEEDED',
    'INTERNAL_SERVER_ERROR',
  ])
  .openapi('PageBasedErrorCode')

const ErrorsListItemSchema = z
  .object({
    Page: IntegerSchema.and(
      z.any().openapi({ description: 'Page number where the error occurred.' }),
    ).exactOptional(),
    ErrorCode: PageBasedErrorCodeSchema.and(
      z.any().openapi({ description: 'Error code for the cause of the error.' }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z.any().openapi({ description: 'Text message explaining the reason for the error.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Text extraction encountered one or more page-level errors in the input document.</p> <p>The <code>ErrorCode</code> contains one of the following values:</p> <ul> <li> <p>TEXTRACT_BAD_PAGE - Amazon Textract cannot read the page. For more information about page limits in Amazon Textract, see <a href="https://docs.aws.amazon.com/textract/latest/dg/limits-document.html"> Page Quotas in Amazon Textract</a>.</p> </li> <li> <p>TEXTRACT_PROVISIONED_THROUGHPUT_EXCEEDED - The number of requests exceeded your throughput limit. For more information about throughput quotas in Amazon Textract, see <a href="https://docs.aws.amazon.com/textract/latest/dg/limits-quotas-explained.html"> Default quotas in Amazon Textract</a>.</p> </li> <li> <p>PAGE_CHARACTERS_EXCEEDED - Too many text characters on the page (10,000 characters maximum).</p> </li> <li> <p>PAGE_SIZE_EXCEEDED - The maximum page size is 10 MB.</p> </li> <li> <p>INTERNAL_SERVER_ERROR - The request encountered a service issue. Try the API request again.</p> </li> </ul>',
    required: [],
  })
  .openapi('ErrorsListItem')

const ListOfErrorsSchema = z.array(ErrorsListItemSchema).openapi('ListOfErrors')

const PageBasedWarningCodeSchema = z
  .enum([
    'INFERENCING_PLAINTEXT_WITH_NATIVE_TRAINED_MODEL',
    'INFERENCING_NATIVE_DOCUMENT_WITH_PLAINTEXT_TRAINED_MODEL',
  ])
  .openapi('PageBasedWarningCode')

const WarningsListItemSchema = z
  .object({
    Page: IntegerSchema.and(
      z.any().openapi({ description: 'Page number in the input document.' }),
    ).exactOptional(),
    WarnCode: PageBasedWarningCodeSchema.and(
      z.any().openapi({ description: 'The type of warning.' }),
    ).exactOptional(),
    WarnMessage: StringSchema.and(
      z.any().openapi({ description: 'Text message associated with the warning.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The system identified one of the following warnings while processing the input document:</p> <ul> <li> <p>The document to classify is plain text, but the classifier is a native model.</p> </li> <li> <p>The document to classify is semi-structured, but the classifier is a plain-text model.</p> </li> </ul>',
    required: [],
  })
  .openapi('WarningsListItem')

const ListOfWarningsSchema = z.array(WarningsListItemSchema).openapi('ListOfWarnings')

const ClassifyDocumentResponseSchema = z
  .object({
    Classes: ListOfClassesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The classes used by the document being analyzed. These are used for multi-class trained models. Individual classes are mutually exclusive and each document is expected to have only a single class assigned to it. For example, an animal can be a dog or a cat, but not both at the same time. ',
        }),
    ).exactOptional(),
    Labels: ListOfLabelsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The labels used the document being analyzed. These are used for multi-label trained models. Individual labels represent different categories that are related in some manner and are not mutually exclusive. For example, a movie can be just an action movie, or it can be an action movie, a science fiction movie, and a comedy, all at the same time. ',
        }),
    ).exactOptional(),
    DocumentMetadata: DocumentMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Extraction information about the document. This field is present in the response only if your request includes the <code>Byte</code> parameter. ',
        }),
    ).exactOptional(),
    DocumentType: ListOfDocumentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The document type for each page in the input document. This field is present in the response only if your request includes the <code>Byte</code> parameter. ',
        }),
    ).exactOptional(),
    Errors: ListOfErrorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Page-level errors that the system detected while processing the input document. The field is empty if the system encountered no errors.',
        }),
    ).exactOptional(),
    Warnings: ListOfWarningsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Warnings detected while processing the input document. The response includes a warning if there is a mismatch between the input document type and the model type associated with the endpoint that you specified. The response can also include warnings for individual pages that have a mismatch. </p> <p>The field is empty if the system generated no warnings.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClassifyDocumentResponse')

const DocumentClassifierEndpointArnSchema = z
  .string()
  .regex(
    /arn:aws(-[^:]+)?:comprehend:[a-zA-Z0-9-]*:[0-9]{12}:document-classifier-endpoint\/[a-zA-Z0-9](-*[a-zA-Z0-9])*/,
  )
  .max(256)
  .openapi('DocumentClassifierEndpointArn')

const SemiStructuredDocumentBlobSchema = z.string().min(1).openapi('SemiStructuredDocumentBlob')

const DocumentReadActionSchema = z
  .enum(['TEXTRACT_DETECT_DOCUMENT_TEXT', 'TEXTRACT_ANALYZE_DOCUMENT'])
  .openapi('DocumentReadAction')

const DocumentReadModeSchema = z
  .enum(['SERVICE_DEFAULT', 'FORCE_DOCUMENT_READ_ACTION'])
  .openapi('DocumentReadMode')

const DocumentReadFeatureTypesSchema = z
  .enum(['TABLES', 'FORMS'])
  .openapi({
    description:
      '<p>Specifies the type of Amazon Textract features to apply. If you chose <code>TEXTRACT_ANALYZE_DOCUMENT</code> as the read action, you must specify one or both of the following values:</p> <ul> <li> <p> <code>TABLES</code> - Returns additional information about any tables that are detected in the input document. </p> </li> <li> <p> <code>FORMS</code> - Returns additional information about any forms that are detected in the input document. </p> </li> </ul>',
  })
  .openapi('DocumentReadFeatureTypes')

const ListOfDocumentReadFeatureTypesSchema = z
  .array(DocumentReadFeatureTypesSchema)
  .min(1)
  .max(2)
  .openapi('ListOfDocumentReadFeatureTypes')

const DocumentReaderConfigSchema = z
  .object({
    DocumentReadAction: DocumentReadActionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This field defines the Amazon Textract API operation that Amazon Comprehend uses to extract text from PDF files and image files. Enter one of the following values:</p> <ul> <li> <p> <code>TEXTRACT_DETECT_DOCUMENT_TEXT</code> - The Amazon Comprehend service uses the <code>DetectDocumentText</code> API operation. </p> </li> <li> <p> <code>TEXTRACT_ANALYZE_DOCUMENT</code> - The Amazon Comprehend service uses the <code>AnalyzeDocument</code> API operation. </p> </li> </ul>',
        }),
    ),
    DocumentReadMode: DocumentReadModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines the text extraction actions for PDF files. Enter one of the following values:</p> <ul> <li> <p> <code>SERVICE_DEFAULT</code> - use the Amazon Comprehend service defaults for PDF files.</p> </li> <li> <p> <code>FORCE_DOCUMENT_READ_ACTION</code> - Amazon Comprehend uses the Textract API specified by DocumentReadAction for all PDF files, including digital PDF files. </p> </li> </ul>',
        }),
    ).exactOptional(),
    FeatureTypes: ListOfDocumentReadFeatureTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the type of Amazon Textract features to apply. If you chose <code>TEXTRACT_ANALYZE_DOCUMENT</code> as the read action, you must specify one or both of the following values:</p> <ul> <li> <p> <code>TABLES</code> - Returns information about any tables that are detected in the input document. </p> </li> <li> <p> <code>FORMS</code> - Returns information and the data from any forms that are detected in the input document. </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DocumentReadAction'],
    description:
      '<p>Provides configuration parameters to override the default actions for extracting text from PDF documents and image files. </p> <p> By default, Amazon Comprehend performs the following actions to extract text from files, based on the input file type: </p> <ul> <li> <p> <b>Word files</b> - Amazon Comprehend parser extracts the text. </p> </li> <li> <p> <b>Digital PDF files</b> - Amazon Comprehend parser extracts the text. </p> </li> <li> <p> <b>Image files and scanned PDF files</b> - Amazon Comprehend uses the Amazon Textract <code>DetectDocumentText</code> API to extract the text. </p> </li> </ul> <p> <code>DocumentReaderConfig</code> does not apply to plain text files or Word files.</p> <p> For image files and PDF documents, you can override these default actions using the fields listed below. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-set-textract-options.html"> Setting text extraction options</a> in the Comprehend Developer Guide. </p>',
  })
  .openapi('DocumentReaderConfig')

const ClassifyDocumentRequestSchema = z
  .object({
    Text: CustomerInputStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The document text to be analyzed. If you enter text using this parameter, do not use the <code>Bytes</code> parameter.',
        }),
    ).exactOptional(),
    EndpointArn: DocumentClassifierEndpointArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Number (ARN) of the endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.',
        }),
    ),
    Bytes: SemiStructuredDocumentBlobSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use the <code>Bytes</code> parameter to input a text, PDF, Word or image file. You can also use the <code>Bytes</code> parameter to input an Amazon Textract <code>DetectDocumentText</code> or <code>AnalyzeDocument</code> output file.</p> <p>Provide the input document as a sequence of base64-encoded bytes. If your code uses an Amazon Web Services SDK to classify documents, the SDK may encode the document file bytes for you. </p> <p>The maximum length of this field depends on the input document type. For details, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync.html"> Inputs for real-time custom analysis</a> in the Comprehend Developer Guide. </p> <p>If you use the <code>Bytes</code> parameter, do not use the <code>Text</code> parameter.</p>',
        }),
    ).exactOptional(),
    DocumentReaderConfig: DocumentReaderConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides configuration parameters to override the default actions for extracting text from PDF documents and image files.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['EndpointArn'], title: 'ClassifyDocumentRequest' })
  .openapi('ClassifyDocumentRequest')

const ResourceUnavailableExceptionSchema = z.any().openapi('ResourceUnavailableException')

const PiiEntityTypeSchema = z
  .enum([
    'BANK_ACCOUNT_NUMBER',
    'BANK_ROUTING',
    'CREDIT_DEBIT_NUMBER',
    'CREDIT_DEBIT_CVV',
    'CREDIT_DEBIT_EXPIRY',
    'PIN',
    'EMAIL',
    'ADDRESS',
    'NAME',
    'PHONE',
    'SSN',
    'DATE_TIME',
    'PASSPORT_NUMBER',
    'DRIVER_ID',
    'URL',
    'AGE',
    'USERNAME',
    'PASSWORD',
    'AWS_ACCESS_KEY',
    'AWS_SECRET_KEY',
    'IP_ADDRESS',
    'MAC_ADDRESS',
    'ALL',
    'LICENSE_PLATE',
    'VEHICLE_IDENTIFICATION_NUMBER',
    'UK_NATIONAL_INSURANCE_NUMBER',
    'CA_SOCIAL_INSURANCE_NUMBER',
    'US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER',
    'UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER',
    'IN_PERMANENT_ACCOUNT_NUMBER',
    'IN_NREGA',
    'INTERNATIONAL_BANK_ACCOUNT_NUMBER',
    'SWIFT_CODE',
    'UK_NATIONAL_HEALTH_SERVICE_NUMBER',
    'CA_HEALTH_NUMBER',
    'IN_AADHAAR',
    'IN_VOTER_NUMBER',
  ])
  .openapi('PiiEntityType')

const EntityLabelSchema = z
  .object({
    Name: PiiEntityTypeSchema.and(
      z.any().openapi({ description: 'The name of the label.' }),
    ).exactOptional(),
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Amazon Comprehend has in the accuracy of the detection.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies one of the label or labels that categorize the personally identifiable information (PII) entity being analyzed.',
    required: [],
  })
  .openapi('EntityLabel')

const ListOfEntityLabelsSchema = z.array(EntityLabelSchema).openapi('ListOfEntityLabels')

const ContainsPiiEntitiesResponseSchema = z
  .object({
    Labels: ListOfEntityLabelsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The labels used in the document being analyzed. Individual labels represent personally identifiable information (PII) entity types.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContainsPiiEntitiesResponse')

const ContainsPiiEntitiesRequestSchema = z
  .object({
    Text: StringSchema.and(
      z.any().openapi({ description: 'A UTF-8 text string. The maximum string size is 100 KB.' }),
    ),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language of the input documents. Currently, English is the only valid language.',
        }),
    ),
  })
  .openapi({ required: ['Text', 'LanguageCode'], title: 'ContainsPiiEntitiesRequest' })
  .openapi('ContainsPiiEntitiesRequest')

const ComprehendDatasetArnSchema = z
  .string()
  .regex(
    /arn:aws(-[^:]+)?:comprehend:[a-zA-Z0-9-]*:[0-9]{12}:flywheel\/[a-zA-Z0-9](-*[a-zA-Z0-9])*\/dataset\/[a-zA-Z0-9](-*[a-zA-Z0-9])*/,
  )
  .max(256)
  .openapi('ComprehendDatasetArn')

const CreateDatasetResponseSchema = z
  .object({
    DatasetArn: ComprehendDatasetArnSchema.and(
      z.any().openapi({ description: 'The ARN of the dataset.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDatasetResponse')

const ComprehendFlywheelArnSchema = z
  .string()
  .regex(
    /arn:aws(-[^:]+)?:comprehend:[a-zA-Z0-9-]*:[0-9]{12}:flywheel\/[a-zA-Z0-9](-*[a-zA-Z0-9])*/,
  )
  .max(256)
  .openapi('ComprehendFlywheelArn')

const ComprehendArnNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9](-*[a-zA-Z0-9])*$/)
  .max(63)
  .openapi('ComprehendArnName')

const DatasetTypeSchema = z.enum(['TRAIN', 'TEST']).openapi('DatasetType')

const DescriptionSchema = z
  .string()
  .regex(/^([a-zA-Z0-9_])[\\a-zA-Z0-9_@#%*+=:?.\/!\s-]*$/)
  .max(2048)
  .openapi('Description')

const AttributeNamesListItemSchema = z
  .string()
  .regex(/^[a-zA-Z0-9](-*[a-zA-Z0-9])*/)
  .min(1)
  .max(63)
  .openapi('AttributeNamesListItem')

const AttributeNamesListSchema = z.array(AttributeNamesListItemSchema).openapi('AttributeNamesList')

const S3UriSchema = z
  .string()
  .regex(/s3:\/\/[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](\/.*)?/)
  .max(1024)
  .openapi('S3Uri')

const AugmentedManifestsDocumentTypeFormatSchema = z
  .enum(['PLAIN_TEXT_DOCUMENT', 'SEMI_STRUCTURED_DOCUMENT'])
  .openapi('AugmentedManifestsDocumentTypeFormat')

const DatasetAugmentedManifestsListItemSchema = z
  .object({
    AttributeNames: AttributeNamesListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The JSON attribute that contains the annotations for your training documents. The number of attribute names that you specify depends on whether your augmented manifest file is the output of a single labeling job or a chained labeling job.</p> <p>If your file is the output of a single labeling job, specify the LabelAttributeName key that was used when the job was created in Ground Truth.</p> <p>If your file is the output of a chained labeling job, specify the LabelAttributeName key for one or more jobs in the chain. Each LabelAttributeName key provides the annotations from an individual job.</p>',
        }),
    ),
    S3Uri: S3UriSchema.and(
      z.any().openapi({ description: 'The Amazon S3 location of the augmented manifest file.' }),
    ),
    AnnotationDataS3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 prefix to the annotation files that are referred in the augmented manifest file.',
        }),
    ).exactOptional(),
    SourceDocumentsS3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest file.',
        }),
    ).exactOptional(),
    DocumentType: AugmentedManifestsDocumentTypeFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of augmented manifest. If you don't specify, the default is PlainTextDocument. </p> <p> <code>PLAIN_TEXT_DOCUMENT</code> A document type that represents any unicode text that is encoded in UTF-8.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AttributeNames', 'S3Uri'],
    description:
      'An augmented manifest file that provides training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.',
  })
  .openapi('DatasetAugmentedManifestsListItem')

const DatasetAugmentedManifestsListSchema = z
  .array(DatasetAugmentedManifestsListItemSchema)
  .openapi('DatasetAugmentedManifestsList')

const DatasetDataFormatSchema = z
  .enum(['COMPREHEND_CSV', 'AUGMENTED_MANIFEST'])
  .openapi('DatasetDataFormat')

const LabelDelimiterSchema = z
  .string()
  .regex(/^[ ~!@#$%^*\-_+=|\\:;\t>?\/]$/)
  .length(1)
  .openapi('LabelDelimiter')

const DatasetDocumentClassifierInputDataConfigSchema = z
  .object({
    S3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon S3 URI for the input data. The S3 bucket must be in the same Region as the API endpoint that you are calling. The URI can point to a single input file or it can provide the prefix for a collection of input files.</p> <p>For example, if you use the URI <code>S3://bucketName/prefix</code>, if the prefix is a single file, Amazon Comprehend uses that file as input. If more than one file begins with the prefix, Amazon Comprehend uses all of them as input.</p> <p>This parameter is required if you set <code>DataFormat</code> to <code>COMPREHEND_CSV</code>.</p>',
        }),
    ),
    LabelDelimiter: LabelDelimiterSchema.and(
      z
        .any()
        .openapi({
          description:
            "Indicates the delimiter used to separate each label for training a multi-label classifier. The default delimiter between labels is a pipe (|). You can use a different character as a delimiter (if it's an allowed character) by specifying it under Delimiter for labels. If the training documents use a delimiter other than the default or the delimiter you specify, the labels on that line will be combined to make a single unique label, such as LABELLABELLABEL.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['S3Uri'],
    description:
      '<p>Describes the dataset input data configuration for a document classifier model.</p> <p>For more information on how the input file is formatted, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-classifier-data.html">Preparing training data</a> in the Comprehend Developer Guide. </p>',
  })
  .openapi('DatasetDocumentClassifierInputDataConfig')

const DatasetEntityRecognizerAnnotationsSchema = z
  .object({
    S3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the Amazon S3 location where the training documents for an entity recognizer are located. The URI must be in the same Region as the API endpoint that you are calling.',
        }),
    ),
  })
  .openapi({
    required: ['S3Uri'],
    description: 'Describes the annotations associated with a entity recognizer.',
  })
  .openapi('DatasetEntityRecognizerAnnotations')

const InputFormatSchema = z.enum(['ONE_DOC_PER_FILE', 'ONE_DOC_PER_LINE']).openapi('InputFormat')

const DatasetEntityRecognizerDocumentsSchema = z
  .object({
    S3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the Amazon S3 location where the documents for the dataset are located. ',
        }),
    ),
    InputFormat: InputFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies how the text in an input file should be processed. This is optional, and the default is ONE_DOC_PER_LINE. ONE_DOC_PER_FILE - Each file is considered a separate document. Use this option when you are processing large documents, such as newspaper articles or scientific papers. ONE_DOC_PER_LINE - Each line in a file is considered a separate document. Use this option when you are processing many short documents, such as text messages.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['S3Uri'],
    description: 'Describes the documents submitted with a dataset for an entity recognizer model.',
  })
  .openapi('DatasetEntityRecognizerDocuments')

const DatasetEntityRecognizerEntityListSchema = z
  .object({
    S3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the Amazon S3 location where the entity list is located.',
        }),
    ),
  })
  .openapi({
    required: ['S3Uri'],
    description:
      '<p>Describes the dataset entity list for an entity recognizer model.</p> <p>For more information on how the input file is formatted, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-training-data-cer.html">Preparing training data</a> in the Comprehend Developer Guide. </p>',
  })
  .openapi('DatasetEntityRecognizerEntityList')

const DatasetEntityRecognizerInputDataConfigSchema = z
  .object({
    Annotations: DatasetEntityRecognizerAnnotationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 location of the annotation documents for your custom entity recognizer.',
        }),
    ).exactOptional(),
    Documents: DatasetEntityRecognizerDocumentsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The format and location of the training documents for your custom entity recognizer.',
        }),
    ),
    EntityList: DatasetEntityRecognizerEntityListSchema.and(
      z
        .any()
        .openapi({
          description: 'The S3 location of the entity list for your custom entity recognizer.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Documents'],
    description:
      'Specifies the format and location of the input data. You must provide either the <code>Annotations</code> parameter or the <code>EntityList</code> parameter.',
  })
  .openapi('DatasetEntityRecognizerInputDataConfig')

const DatasetInputDataConfigSchema = z
  .object({
    AugmentedManifests: DatasetAugmentedManifestsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of augmented manifest files that provide training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth. ',
        }),
    ).exactOptional(),
    DataFormat: DatasetDataFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <code>COMPREHEND_CSV</code>: The data format is a two-column CSV file, where the first column contains labels and the second column contains documents.</p> <p> <code>AUGMENTED_MANIFEST</code>: The data format </p>',
        }),
    ).exactOptional(),
    DocumentClassifierInputDataConfig: DatasetDocumentClassifierInputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The input properties for training a document classifier model. </p> <p>For more information on how the input file is formatted, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-classifier-data.html">Preparing training data</a> in the Comprehend Developer Guide. </p>',
        }),
    ).exactOptional(),
    EntityRecognizerInputDataConfig: DatasetEntityRecognizerInputDataConfigSchema.and(
      z
        .any()
        .openapi({ description: 'The input properties for training an entity recognizer model.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies the format and location of the input data for the dataset.',
    required: [],
  })
  .openapi('DatasetInputDataConfig')

const ClientRequestTokenStringSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-]+$/)
  .min(1)
  .max(64)
  .openapi('ClientRequestTokenString')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The initial part of a key-value pair that forms a tag associated with a given resource. For instance, if you want to show which resources are used by which departments, you might use “Department” as the key portion of the pair, with multiple possible values such as “sales,” “legal,” and “administration.” ',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The second part of a key-value pair that forms a tag associated with a given resource. For instance, if you want to show which resources are used by which departments, you might use “Department” as the initial (key) portion of the pair, with a value of “sales” to indicate the sales department. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Key'],
    description:
      'A key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with the key-value pair ‘Department’:’Sales’ might be added to a resource to indicate its use by a particular department. ',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const CreateDatasetRequestSchema = z
  .object({
    FlywheelArn: ComprehendFlywheelArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Number (ARN) of the flywheel of the flywheel to receive the data.',
        }),
    ),
    DatasetName: ComprehendArnNameSchema.and(
      z.any().openapi({ description: 'Name of the dataset.' }),
    ),
    DatasetType: DatasetTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The dataset type. You can specify that the data in a dataset is for training the model or for testing the model.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'Description of the dataset.' }),
    ).exactOptional(),
    InputDataConfig: DatasetInputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the input data configuration. The type of input data varies based on the format of the input and whether the data is for a classifier model or an entity recognition model.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'Tags for the dataset.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FlywheelArn', 'DatasetName', 'InputDataConfig'],
    title: 'CreateDatasetRequest',
  })
  .openapi('CreateDatasetRequest')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const ResourceLimitExceededExceptionSchema = z.any().openapi('ResourceLimitExceededException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const DocumentClassifierArnSchema = z
  .string()
  .regex(
    /arn:aws(-[^:]+)?:comprehend:[a-zA-Z0-9-]*:[0-9]{12}:document-classifier\/[a-zA-Z0-9](-*[a-zA-Z0-9])*(\/version\/[a-zA-Z0-9](-*[a-zA-Z0-9])*)?/,
  )
  .max(256)
  .openapi('DocumentClassifierArn')

const CreateDocumentClassifierResponseSchema = z
  .object({
    DocumentClassifierArn: DocumentClassifierArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) that identifies the document classifier.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDocumentClassifierResponse')

const VersionNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9](-*[a-zA-Z0-9])*$/)
  .max(63)
  .openapi('VersionName')

const IamRoleArnSchema = z
  .string()
  .regex(/arn:aws(-[^:]+)?:iam::[0-9]{12}:role\/.+/)
  .min(20)
  .max(2048)
  .openapi('IamRoleArn')

const DocumentClassifierDataFormatSchema = z
  .enum(['COMPREHEND_CSV', 'AUGMENTED_MANIFEST'])
  .openapi('DocumentClassifierDataFormat')

const SplitSchema = z.enum(['TRAIN', 'TEST']).openapi('Split')

const AugmentedManifestsListItemSchema = z
  .object({
    S3Uri: S3UriSchema.and(
      z.any().openapi({ description: 'The Amazon S3 location of the augmented manifest file.' }),
    ),
    Split: SplitSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The purpose of the data you've provided in the augmented manifest. You can either train or test this data. If you don't specify, the default is train.</p> <p>TRAIN - all of the documents in the manifest will be used for training. If no test documents are provided, Amazon Comprehend will automatically reserve a portion of the training documents for testing.</p> <p> TEST - all of the documents in the manifest will be used for testing.</p>",
        }),
    ).exactOptional(),
    AttributeNames: AttributeNamesListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The JSON attribute that contains the annotations for your training documents. The number of attribute names that you specify depends on whether your augmented manifest file is the output of a single labeling job or a chained labeling job.</p> <p>If your file is the output of a single labeling job, specify the LabelAttributeName key that was used when the job was created in Ground Truth.</p> <p>If your file is the output of a chained labeling job, specify the LabelAttributeName key for one or more jobs in the chain. Each LabelAttributeName key provides the annotations from an individual job.</p>',
        }),
    ),
    AnnotationDataS3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 prefix to the annotation files that are referred in the augmented manifest file.',
        }),
    ).exactOptional(),
    SourceDocumentsS3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest file.',
        }),
    ).exactOptional(),
    DocumentType: AugmentedManifestsDocumentTypeFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of augmented manifest. PlainTextDocument or SemiStructuredDocument. If you don't specify, the default is PlainTextDocument. </p> <ul> <li> <p> <code>PLAIN_TEXT_DOCUMENT</code> A document type that represents any unicode text that is encoded in UTF-8.</p> </li> <li> <p> <code>SEMI_STRUCTURED_DOCUMENT</code> A document type with positional and structural context, like a PDF. For training with Amazon Comprehend, only PDFs are supported. For inference, Amazon Comprehend support PDFs, DOCX and TXT.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['S3Uri', 'AttributeNames'],
    description:
      'An augmented manifest file that provides training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.',
  })
  .openapi('AugmentedManifestsListItem')

const DocumentClassifierAugmentedManifestsListSchema = z
  .array(AugmentedManifestsListItemSchema)
  .openapi('DocumentClassifierAugmentedManifestsList')

const DocumentClassifierDocumentTypeFormatSchema = z
  .enum(['PLAIN_TEXT_DOCUMENT', 'SEMI_STRUCTURED_DOCUMENT'])
  .openapi('DocumentClassifierDocumentTypeFormat')

const DocumentClassifierDocumentsSchema = z
  .object({
    S3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 URI location of the training documents specified in the S3Uri CSV file.',
        }),
    ),
    TestS3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 URI location of the test documents included in the TestS3Uri CSV file. This field is not required if you do not specify a test CSV file.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['S3Uri'],
    description:
      'The location of the training documents. This parameter is required in a request to create a native classifier model.',
  })
  .openapi('DocumentClassifierDocuments')

const DocumentClassifierInputDataConfigSchema = z
  .object({
    DataFormat: DocumentClassifierDataFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The format of your training data:</p> <ul> <li> <p> <code>COMPREHEND_CSV</code>: A two-column CSV file, where labels are provided in the first column, and documents are provided in the second. If you use this value, you must provide the <code>S3Uri</code> parameter in your request.</p> </li> <li> <p> <code>AUGMENTED_MANIFEST</code>: A labeled dataset that is produced by Amazon SageMaker Ground Truth. This file is in JSON lines format. Each line is a complete JSON object that contains a training document and its associated labels. </p> <p>If you use this value, you must provide the <code>AugmentedManifests</code> parameter in your request.</p> </li> </ul> <p>If you don't specify a value, Amazon Comprehend uses <code>COMPREHEND_CSV</code> as the default.</p>",
        }),
    ).exactOptional(),
    S3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon S3 URI for the input data. The S3 bucket must be in the same Region as the API endpoint that you are calling. The URI can point to a single input file or it can provide the prefix for a collection of input files.</p> <p>For example, if you use the URI <code>S3://bucketName/prefix</code>, if the prefix is a single file, Amazon Comprehend uses that file as input. If more than one file begins with the prefix, Amazon Comprehend uses all of them as input.</p> <p>This parameter is required if you set <code>DataFormat</code> to <code>COMPREHEND_CSV</code>.</p>',
        }),
    ).exactOptional(),
    TestS3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            'This specifies the Amazon S3 location where the test annotations for an entity recognizer are located. The URI must be in the same Amazon Web Services Region as the API endpoint that you are calling. ',
        }),
    ).exactOptional(),
    LabelDelimiter: LabelDelimiterSchema.and(
      z
        .any()
        .openapi({
          description:
            "Indicates the delimiter used to separate each label for training a multi-label classifier. The default delimiter between labels is a pipe (|). You can use a different character as a delimiter (if it's an allowed character) by specifying it under Delimiter for labels. If the training documents use a delimiter other than the default or the delimiter you specify, the labels on that line will be combined to make a single unique label, such as LABELLABELLABEL.",
        }),
    ).exactOptional(),
    AugmentedManifests: DocumentClassifierAugmentedManifestsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of augmented manifest files that provide training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.</p> <p>This parameter is required if you set <code>DataFormat</code> to <code>AUGMENTED_MANIFEST</code>.</p>',
        }),
    ).exactOptional(),
    DocumentType: DocumentClassifierDocumentTypeFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of input documents for training the model. Provide plain-text documents to create a plain-text model, and provide semi-structured documents to create a native model.',
        }),
    ).exactOptional(),
    Documents: DocumentClassifierDocumentsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 location of the training documents. This parameter is required in a request to create a native classifier model.',
        }),
    ).exactOptional(),
    DocumentReaderConfig: DocumentReaderConfigSchema.exactOptional(),
  })
  .openapi({
    description:
      '<p>The input properties for training a document classifier. </p> <p>For more information on how the input file is formatted, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-classifier-data.html">Preparing training data</a> in the Comprehend Developer Guide. </p>',
    required: [],
  })
  .openapi('DocumentClassifierInputDataConfig')

const KmsKeyIdSchema = z
  .string()
  .regex(/^\p{ASCII}+$/u)
  .max(2048)
  .openapi('KmsKeyId')

const DocumentClassifierOutputDataConfigSchema = z
  .object({
    S3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When you use the <code>OutputDataConfig</code> object while creating a custom classifier, you specify the Amazon S3 location where you want to write the confusion matrix and other output files. The URI must be in the same Region as the API endpoint that you are calling. The location is used as the prefix for the actual location of this output file.</p> <p>When the custom classifier job is finished, the service creates the output file in a directory specific to the job. The <code>S3Uri</code> field contains the location of the output file, called <code>output.tar.gz</code>. It is a compressed archive that contains the confusion matrix.</p>',
        }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the output results from an analysis job. The KmsKeyId can be one of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>KMS Key Alias: <code>"alias/ExampleAlias"</code> </p> </li> <li> <p>ARN of a KMS Key Alias: <code>"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    FlywheelStatsS3Prefix: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 prefix for the data lake location of the flywheel statistics.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provide the location for output data from a custom classifier job. This field is mandatory if you are training a native classifier model.',
    required: [],
  })
  .openapi('DocumentClassifierOutputDataConfig')

const SecurityGroupIdSchema = z
  .string()
  .regex(/[-0-9a-zA-Z]+/)
  .min(1)
  .max(32)
  .openapi('SecurityGroupId')

const SecurityGroupIdsSchema = z
  .array(SecurityGroupIdSchema)
  .min(1)
  .max(5)
  .openapi('SecurityGroupIds')

const SubnetIdSchema = z
  .string()
  .regex(/[-0-9a-zA-Z]+/)
  .min(1)
  .max(32)
  .openapi('SubnetId')

const SubnetsSchema = z.array(SubnetIdSchema).min(1).max(16).openapi('Subnets')

const VpcConfigSchema = z
  .object({
    SecurityGroupIds: SecurityGroupIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID number for a security group on an instance of your private VPC. Security groups on your VPC function serve as a virtual firewall to control inbound and outbound traffic and provides security for the resources that you’ll be accessing on the VPC. This ID number is preceded by "sg-", for instance: "sg-03b388029b0a285ea". For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html">Security Groups for your VPC</a>. ',
        }),
    ),
    Subnets: SubnetsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID for each subnet being used in your private VPC. This subnet is a subset of the a range of IPv4 addresses used by the VPC and is specific to a given availability zone in the VPC’s Region. This ID number is preceded by "subnet-", for instance: "subnet-04ccf456919e69055". For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">VPCs and Subnets</a>. ',
        }),
    ),
  })
  .openapi({
    required: ['SecurityGroupIds', 'Subnets'],
    description:
      ' Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. ',
  })
  .openapi('VpcConfig')

const DocumentClassifierModeSchema = z
  .enum(['MULTI_CLASS', 'MULTI_LABEL'])
  .openapi('DocumentClassifierMode')

const PolicySchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u00FF]+/)
  .min(1)
  .max(20000)
  .openapi('Policy')

const CreateDocumentClassifierRequestSchema = z
  .object({
    DocumentClassifierName: ComprehendArnNameSchema.and(
      z.any().openapi({ description: 'The name of the document classifier.' }),
    ),
    VersionName: VersionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version name given to the newly created classifier. Version names can have a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The version name must be unique among all models with the same classifier name in the Amazon Web Services account/Amazon Web Services Region.',
        }),
    ).exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags to associate with the document classifier. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. ',
        }),
    ).exactOptional(),
    InputDataConfig: DocumentClassifierInputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the format and location of the input data for the job.',
        }),
    ),
    OutputDataConfig: DocumentClassifierOutputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the location for the output files from a custom classifier job. This parameter is required for a request that creates a native classifier model.',
        }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language of the input documents. You can specify any of the languages supported by Amazon Comprehend. All documents must be in the same language.',
        }),
    ),
    VolumeKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your custom classifier. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. ',
        }),
    ).exactOptional(),
    Mode: DocumentClassifierModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the mode in which the classifier will be trained. The classifier can be trained in multi-class mode, which identifies one and only one class for each document, or multi-label mode, which identifies one or more labels for each document. In multi-label mode, multiple labels for an individual document are separated by a delimiter. The default delimiter between labels is a pipe (|).',
        }),
    ).exactOptional(),
    ModelKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    ModelPolicy: PolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The resource-based policy to attach to your custom document classifier model. You can use this policy to allow another Amazon Web Services account to import your custom model.</p> <p>Provide your policy as a JSON body that you enter as a UTF-8 encoded string without line breaks. To provide valid JSON, enclose the attribute names and values in double quotes. If the JSON body is also enclosed in double quotes, then you must escape the double quotes that are inside the policy:</p> <p> <code>"{\\"attribute\\": \\"value\\", \\"attribute\\": [\\"value\\"]}"</code> </p> <p>To avoid escaping quotes, you can use single quotes to enclose the policy and double quotes to enclose the JSON names and values:</p> <p> <code>\'{"attribute": "value", "attribute": ["value"]}\'</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DocumentClassifierName', 'DataAccessRoleArn', 'InputDataConfig', 'LanguageCode'],
    title: 'CreateDocumentClassifierRequest',
  })
  .openapi('CreateDocumentClassifierRequest')

const KmsKeyValidationExceptionSchema = z.any().openapi('KmsKeyValidationException')

const ComprehendEndpointArnSchema = z
  .string()
  .regex(
    /arn:aws(-[^:]+)?:comprehend:[a-zA-Z0-9-]*:[0-9]{12}:(document-classifier-endpoint|entity-recognizer-endpoint)\/[a-zA-Z0-9](-*[a-zA-Z0-9])*/,
  )
  .max(256)
  .openapi('ComprehendEndpointArn')

const ComprehendModelArnSchema = z
  .string()
  .regex(
    /arn:aws(-[^:]+)?:comprehend:[a-zA-Z0-9-]*:[0-9]{12}:(document-classifier|entity-recognizer)\/[a-zA-Z0-9](-*[a-zA-Z0-9])*(\/version\/[a-zA-Z0-9](-*[a-zA-Z0-9])*)?/,
  )
  .max(256)
  .openapi('ComprehendModelArn')

const CreateEndpointResponseSchema = z
  .object({
    EndpointArn: ComprehendEndpointArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Number (ARN) of the endpoint being created.',
        }),
    ).exactOptional(),
    ModelArn: ComprehendModelArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Number (ARN) of the model to which the endpoint is attached.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateEndpointResponse')

const ComprehendEndpointNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9](-*[a-zA-Z0-9])*$/)
  .max(40)
  .openapi('ComprehendEndpointName')

const InferenceUnitsIntegerSchema = z.int().min(1).openapi('InferenceUnitsInteger')

const CreateEndpointRequestSchema = z
  .object({
    EndpointName: ComprehendEndpointNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the descriptive suffix that becomes part of the <code>EndpointArn</code> used for all subsequent requests to this resource. ',
        }),
    ),
    ModelArn: ComprehendModelArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Number (ARN) of the model to which the endpoint will be attached.',
        }),
    ).exactOptional(),
    DesiredInferenceUnits: InferenceUnitsIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The desired number of inference units to be used by the model using this endpoint. Each inference unit represents of a throughput of 100 characters per second.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An idempotency token provided by the customer. If this token matches a previous endpoint creation request, Amazon Comprehend will not return a <code>ResourceInUseException</code>. ',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags to associate with the endpoint. A tag is a key-value pair that adds metadata to the endpoint. For example, a tag with "Sales" as the key might be added to an endpoint to indicate its use by the sales department. ',
        }),
    ).exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to trained custom models encrypted with a customer managed key (ModelKmsKeyId).',
        }),
    ).exactOptional(),
    FlywheelArn: ComprehendFlywheelArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Number (ARN) of the flywheel to which the endpoint will be attached.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['EndpointName', 'DesiredInferenceUnits'], title: 'CreateEndpointRequest' })
  .openapi('CreateEndpointRequest')

const EntityRecognizerArnSchema = z
  .string()
  .regex(
    /arn:aws(-[^:]+)?:comprehend:[a-zA-Z0-9-]*:[0-9]{12}:entity-recognizer\/[a-zA-Z0-9](-*[a-zA-Z0-9])*(\/version\/[a-zA-Z0-9](-*[a-zA-Z0-9])*)?/,
  )
  .max(256)
  .openapi('EntityRecognizerArn')

const CreateEntityRecognizerResponseSchema = z
  .object({
    EntityRecognizerArn: EntityRecognizerArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) that identifies the entity recognizer.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateEntityRecognizerResponse')

const EntityRecognizerDataFormatSchema = z
  .enum(['COMPREHEND_CSV', 'AUGMENTED_MANIFEST'])
  .openapi('EntityRecognizerDataFormat')

const EntityTypeNameSchema = z
  .string()
  .regex(/^(?![^\n\r\t,]*\\n|\\r|\\t)[^\n\r\t,]+$/)
  .max(64)
  .openapi('EntityTypeName')

const EntityTypesListItemSchema = z
  .object({
    Type: EntityTypeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An entity type within a labeled training dataset that Amazon Comprehend uses to train a custom entity recognizer.</p> <p>Entity types must not contain the following invalid characters: \\n (line break), \\\\n (escaped line break, \\r (carriage return), \\\\r (escaped carriage return), \\t (tab), \\\\t (escaped tab), space, and , (comma).</p>',
        }),
    ),
  })
  .openapi({
    required: ['Type'],
    description:
      'An entity type within a labeled training dataset that Amazon Comprehend uses to train a custom entity recognizer.',
  })
  .openapi('EntityTypesListItem')

const EntityTypesListSchema = z.array(EntityTypesListItemSchema).openapi('EntityTypesList')

const EntityRecognizerDocumentsSchema = z
  .object({
    S3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the Amazon S3 location where the training documents for an entity recognizer are located. The URI must be in the same Region as the API endpoint that you are calling.',
        }),
    ),
    TestS3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the Amazon S3 location where the test documents for an entity recognizer are located. The URI must be in the same Amazon Web Services Region as the API endpoint that you are calling.',
        }),
    ).exactOptional(),
    InputFormat: InputFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies how the text in an input file should be processed. This is optional, and the default is ONE_DOC_PER_LINE. ONE_DOC_PER_FILE - Each file is considered a separate document. Use this option when you are processing large documents, such as newspaper articles or scientific papers. ONE_DOC_PER_LINE - Each line in a file is considered a separate document. Use this option when you are processing many short documents, such as text messages.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['S3Uri'],
    description: 'Describes the training documents submitted with an entity recognizer.',
  })
  .openapi('EntityRecognizerDocuments')

const EntityRecognizerAnnotationsSchema = z
  .object({
    S3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the Amazon S3 location where the annotations for an entity recognizer are located. The URI must be in the same Region as the API endpoint that you are calling.',
        }),
    ),
    TestS3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the Amazon S3 location where the test annotations for an entity recognizer are located. The URI must be in the same Region as the API endpoint that you are calling.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['S3Uri'],
    description: 'Describes the annotations associated with a entity recognizer.',
  })
  .openapi('EntityRecognizerAnnotations')

const EntityRecognizerEntityListSchema = z
  .object({
    S3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the Amazon S3 location where the entity list is located. The URI must be in the same Region as the API endpoint that you are calling.',
        }),
    ),
  })
  .openapi({
    required: ['S3Uri'],
    description: 'Describes the entity list submitted with an entity recognizer.',
  })
  .openapi('EntityRecognizerEntityList')

const EntityRecognizerAugmentedManifestsListSchema = z
  .array(AugmentedManifestsListItemSchema)
  .openapi('EntityRecognizerAugmentedManifestsList')

const EntityRecognizerInputDataConfigSchema = z
  .object({
    DataFormat: EntityRecognizerDataFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The format of your training data:</p> <ul> <li> <p> <code>COMPREHEND_CSV</code>: A CSV file that supplements your training documents. The CSV file contains information about the custom entities that your trained model will detect. The required format of the file depends on whether you are providing annotations or an entity list.</p> <p>If you use this value, you must provide your CSV file by using either the <code>Annotations</code> or <code>EntityList</code> parameters. You must provide your training documents by using the <code>Documents</code> parameter.</p> </li> <li> <p> <code>AUGMENTED_MANIFEST</code>: A labeled dataset that is produced by Amazon SageMaker Ground Truth. This file is in JSON lines format. Each line is a complete JSON object that contains a training document and its labels. Each label annotates a named entity in the training document. </p> <p>If you use this value, you must provide the <code>AugmentedManifests</code> parameter in your request.</p> </li> </ul> <p>If you don't specify a value, Amazon Comprehend uses <code>COMPREHEND_CSV</code> as the default.</p>",
        }),
    ).exactOptional(),
    EntityTypes: EntityTypesListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The entity types in the labeled training data that Amazon Comprehend uses to train the custom entity recognizer. Any entity types that you don't specify are ignored.</p> <p>A maximum of 25 entity types can be used at one time to train an entity recognizer. Entity types must not contain the following invalid characters: \\n (line break), \\\\n (escaped line break), \\r (carriage return), \\\\r (escaped carriage return), \\t (tab), \\\\t (escaped tab), space, and , (comma). </p>",
        }),
    ),
    Documents: EntityRecognizerDocumentsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The S3 location of the folder that contains the training documents for your custom entity recognizer.</p> <p>This parameter is required if you set <code>DataFormat</code> to <code>COMPREHEND_CSV</code>.</p>',
        }),
    ).exactOptional(),
    Annotations: EntityRecognizerAnnotationsSchema.and(
      z
        .any()
        .openapi({
          description: 'The S3 location of the CSV file that annotates your training documents.',
        }),
    ).exactOptional(),
    EntityList: EntityRecognizerEntityListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 location of the CSV file that has the entity list for your custom entity recognizer.',
        }),
    ).exactOptional(),
    AugmentedManifests: EntityRecognizerAugmentedManifestsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of augmented manifest files that provide training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.</p> <p>This parameter is required if you set <code>DataFormat</code> to <code>AUGMENTED_MANIFEST</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['EntityTypes'],
    description: 'Specifies the format and location of the input data.',
  })
  .openapi('EntityRecognizerInputDataConfig')

const CreateEntityRecognizerRequestSchema = z
  .object({
    RecognizerName: ComprehendArnNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name given to the newly created recognizer. Recognizer names can be a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The name must be unique in the account/Region.',
        }),
    ),
    VersionName: VersionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version name given to the newly created recognizer. Version names can be a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The version name must be unique among all models with the same recognizer name in the account/Region.',
        }),
    ).exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags to associate with the entity recognizer. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. ',
        }),
    ).exactOptional(),
    InputDataConfig: EntityRecognizerInputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the format and location of the input data. The S3 bucket containing the input data must be located in the same Region as the entity recognizer being created. ',
        }),
    ),
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            " A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' You can specify any of the following languages: English ("en"), Spanish ("es"), French ("fr"), Italian ("it"), German ("de"), or Portuguese ("pt"). If you plan to use this entity recognizer with PDF, Word, or image input files, you must specify English as the language. All training documents must be in the same language.',
        }),
    ),
    VolumeKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your custom entity recognizer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. ',
        }),
    ).exactOptional(),
    ModelKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    ModelPolicy: PolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The JSON resource-based policy to attach to your custom entity recognizer model. You can use this policy to allow another Amazon Web Services account to import your custom model.</p> <p>Provide your JSON as a UTF-8 encoded string without line breaks. To provide valid JSON for your policy, enclose the attribute names and values in double quotes. If the JSON body is also enclosed in double quotes, then you must escape the double quotes that are inside the policy:</p> <p> <code>"{\\"attribute\\": \\"value\\", \\"attribute\\": [\\"value\\"]}"</code> </p> <p>To avoid escaping quotes, you can use single quotes to enclose the policy and double quotes to enclose the JSON names and values:</p> <p> <code>\'{"attribute": "value", "attribute": ["value"]}\'</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RecognizerName', 'DataAccessRoleArn', 'InputDataConfig', 'LanguageCode'],
    title: 'CreateEntityRecognizerRequest',
  })
  .openapi('CreateEntityRecognizerRequest')

const CreateFlywheelResponseSchema = z
  .object({
    FlywheelArn: ComprehendFlywheelArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Number (ARN) of the flywheel.' }),
    ).exactOptional(),
    ActiveModelArn: ComprehendModelArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Number (ARN) of the active model version.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateFlywheelResponse')

const LabelListItemSchema = z
  .string()
  .regex(/^\P{C}*$/u)
  .max(5000)
  .openapi('LabelListItem')

const LabelsListSchema = z.array(LabelListItemSchema).max(1000).openapi('LabelsList')

const DocumentClassificationConfigSchema = z
  .object({
    Mode: DocumentClassifierModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Classification mode indicates whether the documents are <code>MULTI_CLASS</code> or <code>MULTI_LABEL</code>.',
        }),
    ),
    Labels: LabelsListSchema.and(
      z
        .any()
        .openapi({ description: 'One or more labels to associate with the custom classifier.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Mode'],
    description: 'Configuration required for a custom classification model.',
  })
  .openapi('DocumentClassificationConfig')

const EntityRecognitionConfigSchema = z
  .object({
    EntityTypes: EntityTypesListSchema.and(
      z
        .any()
        .openapi({ description: 'Up to 25 entity types that the model is trained to recognize.' }),
    ),
  })
  .openapi({
    required: ['EntityTypes'],
    description: 'Configuration required for an entity recognition model.',
  })
  .openapi('EntityRecognitionConfig')

const TaskConfigSchema = z
  .object({
    LanguageCode: LanguageCodeSchema.and(
      z.any().openapi({ description: 'Language code for the language that the model supports.' }),
    ),
    DocumentClassificationConfig: DocumentClassificationConfigSchema.and(
      z.any().openapi({ description: 'Configuration required for a classification model.' }),
    ).exactOptional(),
    EntityRecognitionConfig: EntityRecognitionConfigSchema.and(
      z.any().openapi({ description: 'Configuration required for an entity recognition model.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['LanguageCode'],
    description: 'Configuration about the custom classifier associated with the flywheel.',
  })
  .openapi('TaskConfig')

const ModelTypeSchema = z.enum(['DOCUMENT_CLASSIFIER', 'ENTITY_RECOGNIZER']).openapi('ModelType')

const FlywheelS3UriSchema = z
  .string()
  .regex(/s3:\/\/[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](\/.*)?/)
  .max(512)
  .openapi('FlywheelS3Uri')

const DataSecurityConfigSchema = z
  .object({
    ModelKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    VolumeKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description: 'ID for the KMS key that Amazon Comprehend uses to encrypt the volume.',
        }),
    ).exactOptional(),
    DataLakeKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'ID for the KMS key that Amazon Comprehend uses to encrypt the data in the data lake.',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.exactOptional(),
  })
  .openapi({ description: 'Data security configuration.', required: [] })
  .openapi('DataSecurityConfig')

const CreateFlywheelRequestSchema = z
  .object({
    FlywheelName: ComprehendArnNameSchema.and(
      z.any().openapi({ description: 'Name for the flywheel.' }),
    ),
    ActiveModelArn: ComprehendModelArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'To associate an existing model with the flywheel, specify the Amazon Resource Number (ARN) of the model version.',
        }),
    ).exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend the permissions required to access the flywheel data in the data lake.',
        }),
    ),
    TaskConfig: TaskConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration about the custom classifier associated with the flywheel.',
        }),
    ).exactOptional(),
    ModelType: ModelTypeSchema.and(
      z.any().openapi({ description: 'The model type.' }),
    ).exactOptional(),
    DataLakeS3Uri: FlywheelS3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enter the S3 location for the data lake. You can specify a new S3 bucket or a new folder of an existing S3 bucket. The flywheel creates the data lake at this location.',
        }),
    ),
    DataSecurityConfig: DataSecurityConfigSchema.and(
      z.any().openapi({ description: 'Data security configurations.' }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to associate with this flywheel.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FlywheelName', 'DataAccessRoleArn', 'DataLakeS3Uri'],
    title: 'CreateFlywheelRequest',
  })
  .openapi('CreateFlywheelRequest')

const DeleteDocumentClassifierResponseSchema = z
  .object({})
  .openapi('DeleteDocumentClassifierResponse')

const DeleteDocumentClassifierRequestSchema = z
  .object({
    DocumentClassifierArn: DocumentClassifierArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) that identifies the document classifier. ',
        }),
    ),
  })
  .openapi({ required: ['DocumentClassifierArn'], title: 'DeleteDocumentClassifierRequest' })
  .openapi('DeleteDocumentClassifierRequest')

const DeleteEndpointResponseSchema = z.object({}).openapi('DeleteEndpointResponse')

const DeleteEndpointRequestSchema = z
  .object({
    EndpointArn: ComprehendEndpointArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Number (ARN) of the endpoint being deleted.',
        }),
    ),
  })
  .openapi({ required: ['EndpointArn'], title: 'DeleteEndpointRequest' })
  .openapi('DeleteEndpointRequest')

const DeleteEntityRecognizerResponseSchema = z.object({}).openapi('DeleteEntityRecognizerResponse')

const DeleteEntityRecognizerRequestSchema = z
  .object({
    EntityRecognizerArn: EntityRecognizerArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) that identifies the entity recognizer.',
        }),
    ),
  })
  .openapi({ required: ['EntityRecognizerArn'], title: 'DeleteEntityRecognizerRequest' })
  .openapi('DeleteEntityRecognizerRequest')

const DeleteFlywheelResponseSchema = z.object({}).openapi('DeleteFlywheelResponse')

const DeleteFlywheelRequestSchema = z
  .object({
    FlywheelArn: ComprehendFlywheelArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Number (ARN) of the flywheel to delete.' }),
    ),
  })
  .openapi({ required: ['FlywheelArn'], title: 'DeleteFlywheelRequest' })
  .openapi('DeleteFlywheelRequest')

const DeleteResourcePolicyResponseSchema = z.object({}).openapi('DeleteResourcePolicyResponse')

const PolicyRevisionIdSchema = z
  .string()
  .regex(/[0-9A-Fa-f]+/)
  .max(64)
  .openapi('PolicyRevisionId')

const DeleteResourcePolicyRequestSchema = z
  .object({
    ResourceArn: ComprehendModelArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the custom model version that has the policy to delete.',
        }),
    ),
    PolicyRevisionId: PolicyRevisionIdSchema.and(
      z.any().openapi({ description: 'The revision ID of the policy to delete.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceArn'], title: 'DeleteResourcePolicyRequest' })
  .openapi('DeleteResourcePolicyRequest')

const DatasetStatusSchema = z.enum(['CREATING', 'COMPLETED', 'FAILED']).openapi('DatasetStatus')

const AnyLengthStringSchema = z.string().openapi('AnyLengthString')

const NumberOfDocumentsSchema = z.int().openapi('NumberOfDocuments')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const DatasetPropertiesSchema = z
  .object({
    DatasetArn: ComprehendDatasetArnSchema.and(
      z.any().openapi({ description: 'The ARN of the dataset.' }),
    ).exactOptional(),
    DatasetName: ComprehendArnNameSchema.and(
      z.any().openapi({ description: 'The name of the dataset.' }),
    ).exactOptional(),
    DatasetType: DatasetTypeSchema.and(
      z.any().openapi({ description: 'The dataset type (training data or test data).' }),
    ).exactOptional(),
    DatasetS3Uri: S3UriSchema.and(
      z.any().openapi({ description: 'The S3 URI where the dataset is stored.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'Description of the dataset.' }),
    ).exactOptional(),
    Status: DatasetStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The dataset status. While the system creates the dataset, the status is <code>CREATING</code>. When the dataset is ready to use, the status changes to <code>COMPLETED</code>. ',
        }),
    ).exactOptional(),
    Message: AnyLengthStringSchema.and(
      z.any().openapi({ description: 'A description of the status of the dataset.' }),
    ).exactOptional(),
    NumberOfDocuments: NumberOfDocumentsSchema.and(
      z.any().openapi({ description: 'The number of documents in the dataset.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'Creation time of the dataset.' }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'Time when the data from the dataset becomes available in the data lake.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Properties associated with the dataset.', required: [] })
  .openapi('DatasetProperties')

const DescribeDatasetResponseSchema = z
  .object({
    DatasetProperties: DatasetPropertiesSchema.and(
      z.any().openapi({ description: 'The dataset properties.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDatasetResponse')

const DescribeDatasetRequestSchema = z
  .object({
    DatasetArn: ComprehendDatasetArnSchema.and(
      z.any().openapi({ description: 'The ARN of the dataset.' }),
    ),
  })
  .openapi({ required: ['DatasetArn'], title: 'DescribeDatasetRequest' })
  .openapi('DescribeDatasetRequest')

const JobIdSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-%@]*)$/u)
  .min(1)
  .max(32)
  .openapi('JobId')

const ComprehendArnSchema = z
  .string()
  .regex(
    /arn:aws(-[^:]+)?:comprehend:[a-zA-Z0-9-]*:[0-9]{12}:[a-zA-Z0-9-]{1,64}\/[a-zA-Z0-9](-*[a-zA-Z0-9])*((\/dataset\/[a-zA-Z0-9](-*[a-zA-Z0-9])*)|(\/version\/[a-zA-Z0-9](-*[a-zA-Z0-9])*))?/,
  )
  .max(256)
  .openapi('ComprehendArn')

const JobNameSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-%@]*)$/u)
  .min(1)
  .max(256)
  .openapi('JobName')

const JobStatusSchema = z
  .enum(['SUBMITTED', 'IN_PROGRESS', 'COMPLETED', 'FAILED', 'STOP_REQUESTED', 'STOPPED'])
  .openapi('JobStatus')

const InputDataConfigSchema = z
  .object({
    S3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon S3 URI for the input data. The URI must be in same Region as the API endpoint that you are calling. The URI can point to a single input file or it can provide the prefix for a collection of data files. </p> <p>For example, if you use the URI <code>S3://bucketName/prefix</code>, if the prefix is a single file, Amazon Comprehend uses that file as input. If more than one file begins with the prefix, Amazon Comprehend uses all of them as input.</p>',
        }),
    ),
    InputFormat: InputFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies how the text in an input file should be processed:</p> <ul> <li> <p> <code>ONE_DOC_PER_FILE</code> - Each file is considered a separate document. Use this option when you are processing large documents, such as newspaper articles or scientific papers.</p> </li> <li> <p> <code>ONE_DOC_PER_LINE</code> - Each line in a file is considered a separate document. Use this option when you are processing many short documents, such as text messages.</p> </li> </ul>',
        }),
    ).exactOptional(),
    DocumentReaderConfig: DocumentReaderConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides configuration parameters to override the default actions for extracting text from PDF documents and image files.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['S3Uri'],
    description:
      'The input properties for an inference job. The document reader config field applies only to non-text inputs for custom analysis.',
  })
  .openapi('InputDataConfig')

const OutputDataConfigSchema = z
  .object({
    S3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When you use the <code>OutputDataConfig</code> object with asynchronous operations, you specify the Amazon S3 location where you want to write the output data. The URI must be in the same Region as the API endpoint that you are calling. The location is used as the prefix for the actual location of the output file.</p> <p>When the topic detection job is finished, the service creates an output file in a directory specific to the job. The <code>S3Uri</code> field contains the location of the output file, called <code>output.tar.gz</code>. It is a compressed archive that contains the ouput of the operation.</p> <p> For a PII entity detection job, the output file is plain text, not a compressed archive. The output file name is the same as the input file, with <code>.out</code> appended at the end. </p>',
        }),
    ),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the output results from an analysis job. The KmsKeyId can be one of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>KMS Key Alias: <code>"alias/ExampleAlias"</code> </p> </li> <li> <p>ARN of a KMS Key Alias: <code>"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['S3Uri'],
    description: '<p>Provides configuration parameters for the output of inference jobs.</p> <p/>',
  })
  .openapi('OutputDataConfig')

const DocumentClassificationJobPropertiesSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier assigned to the document classification job.' }),
    ).exactOptional(),
    JobArn: ComprehendArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the document classification job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:</p> <p> <code>arn:&lt;partition&gt;:comprehend:&lt;region&gt;:&lt;account-id&gt;:document-classification-job/&lt;job-id&gt;</code> </p> <p>The following is an example job ARN:</p> <p> <code>arn:aws:comprehend:us-west-2:111122223333:document-classification-job/1234abcd12ab34cd56ef1234567890ab</code> </p>',
        }),
    ).exactOptional(),
    JobName: JobNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name that you assigned to the document classification job.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the document classification job. If the status is <code>FAILED</code>, the <code>Message</code> field shows the reason for the failure.',
        }),
    ).exactOptional(),
    Message: AnyLengthStringSchema.and(
      z.any().openapi({ description: 'A description of the status of the job.' }),
    ).exactOptional(),
    SubmitTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that the document classification job was submitted for processing.',
        }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the document classification job completed.' }),
    ).exactOptional(),
    DocumentClassifierArn: DocumentClassifierArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) that identifies the document classifier. ',
        }),
    ).exactOptional(),
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input data configuration that you supplied when you created the document classification job.',
        }),
    ).exactOptional(),
    OutputDataConfig: OutputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The output data configuration that you supplied when you created the document classification job.',
        }),
    ).exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.',
        }),
    ).exactOptional(),
    VolumeKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your document classification job. For more information, see <a href="https://docs.aws.amazon.com/vppc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. ',
        }),
    ).exactOptional(),
    FlywheelArn: ComprehendFlywheelArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Number (ARN) of the flywheel' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about a document classification job.',
    required: [],
  })
  .openapi('DocumentClassificationJobProperties')

const DescribeDocumentClassificationJobResponseSchema = z
  .object({
    DocumentClassificationJobProperties: DocumentClassificationJobPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the properties associated with the document classification job.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDocumentClassificationJobResponse')

const DescribeDocumentClassificationJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier that Amazon Comprehend generated for the job. The <code>StartDocumentClassificationJob</code> operation returns this identifier in its response.',
        }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'DescribeDocumentClassificationJobRequest' })
  .openapi('DescribeDocumentClassificationJobRequest')

const JobNotFoundExceptionSchema = z.any().openapi('JobNotFoundException')

const ModelStatusSchema = z
  .enum([
    'SUBMITTED',
    'TRAINING',
    'DELETING',
    'STOP_REQUESTED',
    'STOPPED',
    'IN_ERROR',
    'TRAINED',
    'TRAINED_WITH_WARNING',
  ])
  .openapi('ModelStatus')

const DoubleSchema = z.float64().openapi('Double')

const ClassifierEvaluationMetricsSchema = z
  .object({
    Accuracy: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fraction of the labels that were correct recognized. It is computed by dividing the number of labels in the test documents that were correctly recognized by the total number of labels in the test documents.',
        }),
    ).exactOptional(),
    Precision: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'A measure of the usefulness of the classifier results in the test data. High precision means that the classifier returned substantially more relevant results than irrelevant ones.',
        }),
    ).exactOptional(),
    Recall: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'A measure of how complete the classifier results are for the test data. High recall means that the classifier returned most of the relevant results. ',
        }),
    ).exactOptional(),
    F1Score: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'A measure of how accurate the classifier results are for the test data. It is derived from the <code>Precision</code> and <code>Recall</code> values. The <code>F1Score</code> is the harmonic average of the two scores. The highest score is 1, and the worst score is 0. ',
        }),
    ).exactOptional(),
    MicroPrecision: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'A measure of the usefulness of the recognizer results in the test data. High precision means that the recognizer returned substantially more relevant results than irrelevant ones. Unlike the Precision metric which comes from averaging the precision of all available labels, this is based on the overall score of all precision scores added together.',
        }),
    ).exactOptional(),
    MicroRecall: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'A measure of how complete the classifier results are for the test data. High recall means that the classifier returned most of the relevant results. Specifically, this indicates how many of the correct categories in the text that the model can predict. It is a percentage of correct categories in the text that can found. Instead of averaging the recall scores of all labels (as with Recall), micro Recall is based on the overall score of all recall scores added together.',
        }),
    ).exactOptional(),
    MicroF1Score: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'A measure of how accurate the classifier results are for the test data. It is a combination of the <code>Micro Precision</code> and <code>Micro Recall</code> values. The <code>Micro F1Score</code> is the harmonic mean of the two scores. The highest score is 1, and the worst score is 0.',
        }),
    ).exactOptional(),
    HammingLoss: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the fraction of labels that are incorrectly predicted. Also seen as the fraction of wrong labels compared to the total number of labels. Scores closer to zero are better.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the result metrics for the test data associated with an documentation classifier.',
    required: [],
  })
  .openapi('ClassifierEvaluationMetrics')

const ClassifierMetadataSchema = z
  .object({
    NumberOfLabels: IntegerSchema.and(
      z.any().openapi({ description: 'The number of labels in the input data. ' }),
    ).exactOptional(),
    NumberOfTrainedDocuments: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of documents in the input data that were used to train the classifier. Typically this is 80 to 90 percent of the input documents.',
        }),
    ).exactOptional(),
    NumberOfTestDocuments: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of documents in the input data that were used to test the classifier. Typically this is 10 to 20 percent of the input documents, up to 10,000 documents.',
        }),
    ).exactOptional(),
    EvaluationMetrics: ClassifierEvaluationMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Describes the result metrics for the test data associated with an documentation classifier.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about a document classifier.', required: [] })
  .openapi('ClassifierMetadata')

const DocumentClassifierPropertiesSchema = z
  .object({
    DocumentClassifierArn: DocumentClassifierArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) that identifies the document classifier.',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language code for the language of the documents that the classifier was trained on.',
        }),
    ).exactOptional(),
    Status: ModelStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the document classifier. If the status is <code>TRAINED</code> the classifier is ready to use. If the status is <code>TRAINED_WITH_WARNINGS</code> the classifier training succeeded, but you should review the warnings returned in the <code>CreateDocumentClassifier</code> response.</p> <p> If the status is <code>FAILED</code> you can see additional information about why the classifier wasn't trained in the <code>Message</code> field.</p>",
        }),
    ).exactOptional(),
    Message: AnyLengthStringSchema.and(
      z
        .any()
        .openapi({ description: 'Additional information about the status of the classifier.' }),
    ).exactOptional(),
    SubmitTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time that the document classifier was submitted for training.',
        }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time that training the document classifier completed.' }),
    ).exactOptional(),
    TrainingStartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the time when the training starts on documentation classifiers. You are billed for the time interval between this time and the value of TrainingEndTime. ',
        }),
    ).exactOptional(),
    TrainingEndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that training of the document classifier was completed. Indicates the time when the training completes on documentation classifiers. You are billed for the time interval between this time and the value of TrainingStartTime.',
        }),
    ).exactOptional(),
    InputDataConfig: DocumentClassifierInputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input data configuration that you supplied when you created the document classifier for training.',
        }),
    ).exactOptional(),
    OutputDataConfig: DocumentClassifierOutputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Provides output results configuration parameters for custom classifier jobs.',
        }),
    ).exactOptional(),
    ClassifierMetadata: ClassifierMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the document classifier, including the number of documents used for training the classifier, the number of documents used for test the classifier, and an accuracy rating.',
        }),
    ).exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.',
        }),
    ).exactOptional(),
    VolumeKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your custom classifier. For more information, see <a href="https://docs.aws.amazon.com/vppc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. ',
        }),
    ).exactOptional(),
    Mode: DocumentClassifierModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the mode in which the specific classifier was trained. This also indicates the format of input documents and the format of the confusion matrix. Each classifier can only be trained in one mode and this cannot be changed once the classifier is trained.',
        }),
    ).exactOptional(),
    ModelKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    VersionName: VersionNameSchema.and(
      z
        .any()
        .openapi({ description: 'The version name that you assigned to the document classifier.' }),
    ).exactOptional(),
    SourceModelArn: DocumentClassifierArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the source model. This model was imported from a different Amazon Web Services account to create the document classifier model in your Amazon Web Services account.',
        }),
    ).exactOptional(),
    FlywheelArn: ComprehendFlywheelArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Number (ARN) of the flywheel' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about a document classifier.', required: [] })
  .openapi('DocumentClassifierProperties')

const DescribeDocumentClassifierResponseSchema = z
  .object({
    DocumentClassifierProperties: DocumentClassifierPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the properties associated with a document classifier.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDocumentClassifierResponse')

const DescribeDocumentClassifierRequestSchema = z
  .object({
    DocumentClassifierArn: DocumentClassifierArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that identifies the document classifier. The <code>CreateDocumentClassifier</code> operation returns this identifier in its response.',
        }),
    ),
  })
  .openapi({ required: ['DocumentClassifierArn'], title: 'DescribeDocumentClassifierRequest' })
  .openapi('DescribeDocumentClassifierRequest')

const DominantLanguageDetectionJobPropertiesSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier assigned to the dominant language detection job.',
        }),
    ).exactOptional(),
    JobArn: ComprehendArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the dominant language detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:</p> <p> <code>arn:&lt;partition&gt;:comprehend:&lt;region&gt;:&lt;account-id&gt;:dominant-language-detection-job/&lt;job-id&gt;</code> </p> <p>The following is an example job ARN:</p> <p> <code>arn:aws:comprehend:us-west-2:111122223333:dominant-language-detection-job/1234abcd12ab34cd56ef1234567890ab</code> </p>',
        }),
    ).exactOptional(),
    JobName: JobNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name that you assigned to the dominant language detection job.',
        }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the dominant language detection job. If the status is <code>FAILED</code>, the <code>Message</code> field shows the reason for the failure.',
        }),
    ).exactOptional(),
    Message: AnyLengthStringSchema.and(
      z.any().openapi({ description: 'A description for the status of a job.' }),
    ).exactOptional(),
    SubmitTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that the dominant language detection job was submitted for processing.',
        }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time that the dominant language detection job completed.' }),
    ).exactOptional(),
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input data configuration that you supplied when you created the dominant language detection job.',
        }),
    ).exactOptional(),
    OutputDataConfig: OutputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The output data configuration that you supplied when you created the dominant language detection job.',
        }),
    ).exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.',
        }),
    ).exactOptional(),
    VolumeKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your dominant language detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about a dominant language detection job.',
    required: [],
  })
  .openapi('DominantLanguageDetectionJobProperties')

const DescribeDominantLanguageDetectionJobResponseSchema = z
  .object({
    DominantLanguageDetectionJobProperties: DominantLanguageDetectionJobPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the properties associated with a dominant language detection job.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDominantLanguageDetectionJobResponse')

const DescribeDominantLanguageDetectionJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier that Amazon Comprehend generated for the job. The <code>StartDominantLanguageDetectionJob</code> operation returns this identifier in its response.',
        }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'DescribeDominantLanguageDetectionJobRequest' })
  .openapi('DescribeDominantLanguageDetectionJobRequest')

const EndpointStatusSchema = z
  .enum(['CREATING', 'DELETING', 'FAILED', 'IN_SERVICE', 'UPDATING'])
  .openapi('EndpointStatus')

const EndpointPropertiesSchema = z
  .object({
    EndpointArn: ComprehendEndpointArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Number (ARN) of the endpoint.' }),
    ).exactOptional(),
    Status: EndpointStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the status of the endpoint. Because the endpoint updates and creation are asynchronous, so customers will need to wait for the endpoint to be <code>Ready</code> status before making inference requests.',
        }),
    ).exactOptional(),
    Message: AnyLengthStringSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies a reason for failure in cases of <code>Failed</code> status.',
        }),
    ).exactOptional(),
    ModelArn: ComprehendModelArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Number (ARN) of the model to which the endpoint is attached.',
        }),
    ).exactOptional(),
    DesiredModelArn: ComprehendModelArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the new model to use for updating an existing endpoint. This ARN is going to be different from the model ARN when the update is in progress',
        }),
    ).exactOptional(),
    DesiredInferenceUnits: InferenceUnitsIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The desired number of inference units to be used by the model using this endpoint. Each inference unit represents of a throughput of 100 characters per second.',
        }),
    ).exactOptional(),
    CurrentInferenceUnits: InferenceUnitsIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of inference units currently used by the model using this endpoint.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The creation date and time of the endpoint.' }),
    ).exactOptional(),
    LastModifiedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the endpoint was last modified.' }),
    ).exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to trained custom models encrypted with a customer managed key (ModelKmsKeyId).',
        }),
    ).exactOptional(),
    DesiredDataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Data access role ARN to use in case the new model is encrypted with a customer KMS key.',
        }),
    ).exactOptional(),
    FlywheelArn: ComprehendFlywheelArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Number (ARN) of the flywheel' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies information about the specified endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.',
    required: [],
  })
  .openapi('EndpointProperties')

const DescribeEndpointResponseSchema = z
  .object({
    EndpointProperties: EndpointPropertiesSchema.and(
      z
        .any()
        .openapi({ description: 'Describes information associated with the specific endpoint.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEndpointResponse')

const DescribeEndpointRequestSchema = z
  .object({
    EndpointArn: ComprehendEndpointArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Number (ARN) of the endpoint being described.',
        }),
    ),
  })
  .openapi({ required: ['EndpointArn'], title: 'DescribeEndpointRequest' })
  .openapi('DescribeEndpointRequest')

const EntitiesDetectionJobPropertiesSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier assigned to the entities detection job.' }),
    ).exactOptional(),
    JobArn: ComprehendArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the entities detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:</p> <p> <code>arn:&lt;partition&gt;:comprehend:&lt;region&gt;:&lt;account-id&gt;:entities-detection-job/&lt;job-id&gt;</code> </p> <p>The following is an example job ARN:</p> <p> <code>arn:aws:comprehend:us-west-2:111122223333:entities-detection-job/1234abcd12ab34cd56ef1234567890ab</code> </p>',
        }),
    ).exactOptional(),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The name that you assigned the entities detection job.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the entities detection job. If the status is <code>FAILED</code>, the <code>Message</code> field shows the reason for the failure.',
        }),
    ).exactOptional(),
    Message: AnyLengthStringSchema.and(
      z.any().openapi({ description: 'A description of the status of a job.' }),
    ).exactOptional(),
    SubmitTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time that the entities detection job was submitted for processing.',
        }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the entities detection job completed' }),
    ).exactOptional(),
    EntityRecognizerArn: EntityRecognizerArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) that identifies the entity recognizer.',
        }),
    ).exactOptional(),
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input data configuration that you supplied when you created the entities detection job.',
        }),
    ).exactOptional(),
    OutputDataConfig: OutputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The output data configuration that you supplied when you created the entities detection job. ',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z.any().openapi({ description: 'The language code of the input documents.' }),
    ).exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.',
        }),
    ).exactOptional(),
    VolumeKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your entity detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. ',
        }),
    ).exactOptional(),
    FlywheelArn: ComprehendFlywheelArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the flywheel associated with this job.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about an entities detection job.', required: [] })
  .openapi('EntitiesDetectionJobProperties')

const DescribeEntitiesDetectionJobResponseSchema = z
  .object({
    EntitiesDetectionJobProperties: EntitiesDetectionJobPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the properties associated with an entities detection job.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEntitiesDetectionJobResponse')

const DescribeEntitiesDetectionJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier that Amazon Comprehend generated for the job. The <code>StartEntitiesDetectionJob</code> operation returns this identifier in its response.',
        }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'DescribeEntitiesDetectionJobRequest' })
  .openapi('DescribeEntitiesDetectionJobRequest')

const EntityRecognizerEvaluationMetricsSchema = z
  .object({
    Precision: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'A measure of the usefulness of the recognizer results in the test data. High precision means that the recognizer returned substantially more relevant results than irrelevant ones. ',
        }),
    ).exactOptional(),
    Recall: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'A measure of how complete the recognizer results are for the test data. High recall means that the recognizer returned most of the relevant results.',
        }),
    ).exactOptional(),
    F1Score: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'A measure of how accurate the recognizer results are for the test data. It is derived from the <code>Precision</code> and <code>Recall</code> values. The <code>F1Score</code> is the harmonic average of the two scores. For plain text entity recognizer models, the range is 0 to 100, where 100 is the best score. For PDF/Word entity recognizer models, the range is 0 to 1, where 1 is the best score. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Detailed information about the accuracy of an entity recognizer. ',
    required: [],
  })
  .openapi('EntityRecognizerEvaluationMetrics')

const EntityTypesEvaluationMetricsSchema = z
  .object({
    Precision: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'A measure of the usefulness of the recognizer results for a specific entity type in the test data. High precision means that the recognizer returned substantially more relevant results than irrelevant ones. ',
        }),
    ).exactOptional(),
    Recall: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'A measure of how complete the recognizer results are for a specific entity type in the test data. High recall means that the recognizer returned most of the relevant results.',
        }),
    ).exactOptional(),
    F1Score: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'A measure of how accurate the recognizer results are for a specific entity type in the test data. It is derived from the <code>Precision</code> and <code>Recall</code> values. The <code>F1Score</code> is the harmonic average of the two scores. The highest score is 1, and the worst score is 0. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Detailed information about the accuracy of an entity recognizer for a specific entity type. ',
    required: [],
  })
  .openapi('EntityTypesEvaluationMetrics')

const EntityRecognizerMetadataEntityTypesListItemSchema = z
  .object({
    Type: AnyLengthStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Type of entity from the list of entity types in the metadata of an entity recognizer. ',
        }),
    ).exactOptional(),
    EvaluationMetrics: EntityTypesEvaluationMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Detailed information about the accuracy of the entity recognizer for a specific item on the list of entity types. ',
        }),
    ).exactOptional(),
    NumberOfTrainMentions: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the number of times the given entity type was seen in the training data. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Individual item from the list of entity types in the metadata of an entity recognizer.',
    required: [],
  })
  .openapi('EntityRecognizerMetadataEntityTypesListItem')

const EntityRecognizerMetadataEntityTypesListSchema = z
  .array(EntityRecognizerMetadataEntityTypesListItemSchema)
  .openapi('EntityRecognizerMetadataEntityTypesList')

const EntityRecognizerMetadataSchema = z
  .object({
    NumberOfTrainedDocuments: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of documents in the input data that were used to train the entity recognizer. Typically this is 80 to 90 percent of the input documents.',
        }),
    ).exactOptional(),
    NumberOfTestDocuments: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of documents in the input data that were used to test the entity recognizer. Typically this is 10 to 20 percent of the input documents.',
        }),
    ).exactOptional(),
    EvaluationMetrics: EntityRecognizerEvaluationMetricsSchema.and(
      z
        .any()
        .openapi({
          description: 'Detailed information about the accuracy of an entity recognizer.',
        }),
    ).exactOptional(),
    EntityTypes: EntityRecognizerMetadataEntityTypesListSchema.and(
      z.any().openapi({ description: 'Entity types from the metadata of an entity recognizer.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Detailed information about an entity recognizer.', required: [] })
  .openapi('EntityRecognizerMetadata')

const EntityRecognizerOutputDataConfigSchema = z
  .object({
    FlywheelStatsS3Prefix: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 prefix for the data lake location of the flywheel statistics.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Output data configuration.', required: [] })
  .openapi('EntityRecognizerOutputDataConfig')

const EntityRecognizerPropertiesSchema = z
  .object({
    EntityRecognizerArn: EntityRecognizerArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) that identifies the entity recognizer.',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The language of the input documents. All documents must be in the same language. Only English ("en") is currently supported.',
        }),
    ).exactOptional(),
    Status: ModelStatusSchema.and(
      z.any().openapi({ description: 'Provides the status of the entity recognizer.' }),
    ).exactOptional(),
    Message: AnyLengthStringSchema.and(
      z.any().openapi({ description: ' A description of the status of the recognizer.' }),
    ).exactOptional(),
    SubmitTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time that the recognizer was submitted for processing.' }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the recognizer creation completed.' }),
    ).exactOptional(),
    TrainingStartTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time that training of the entity recognizer started.' }),
    ).exactOptional(),
    TrainingEndTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time that training of the entity recognizer was completed.' }),
    ).exactOptional(),
    InputDataConfig: EntityRecognizerInputDataConfigSchema.and(
      z.any().openapi({ description: 'The input data properties of an entity recognizer.' }),
    ).exactOptional(),
    RecognizerMetadata: EntityRecognizerMetadataSchema.and(
      z.any().openapi({ description: ' Provides information about an entity recognizer.' }),
    ).exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.',
        }),
    ).exactOptional(),
    VolumeKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your custom entity recognizer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. ',
        }),
    ).exactOptional(),
    ModelKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    VersionName: VersionNameSchema.and(
      z.any().openapi({ description: 'The version name you assigned to the entity recognizer.' }),
    ).exactOptional(),
    SourceModelArn: EntityRecognizerArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the source model. This model was imported from a different Amazon Web Services account to create the entity recognizer model in your Amazon Web Services account.',
        }),
    ).exactOptional(),
    FlywheelArn: ComprehendFlywheelArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Number (ARN) of the flywheel' }),
    ).exactOptional(),
    OutputDataConfig: EntityRecognizerOutputDataConfigSchema.and(
      z.any().openapi({ description: 'Output data configuration.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes information about an entity recognizer.', required: [] })
  .openapi('EntityRecognizerProperties')

const DescribeEntityRecognizerResponseSchema = z
  .object({
    EntityRecognizerProperties: EntityRecognizerPropertiesSchema.and(
      z
        .any()
        .openapi({ description: 'Describes information associated with an entity recognizer.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEntityRecognizerResponse')

const DescribeEntityRecognizerRequestSchema = z
  .object({
    EntityRecognizerArn: EntityRecognizerArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) that identifies the entity recognizer.',
        }),
    ),
  })
  .openapi({ required: ['EntityRecognizerArn'], title: 'DescribeEntityRecognizerRequest' })
  .openapi('DescribeEntityRecognizerRequest')

const EventTypeStringSchema = z
  .string()
  .regex(/[A-Z_]*/)
  .min(1)
  .max(40)
  .openapi('EventTypeString')

const TargetEventTypesSchema = z.array(EventTypeStringSchema).min(1).openapi('TargetEventTypes')

const EventsDetectionJobPropertiesSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier assigned to the events detection job.' }),
    ).exactOptional(),
    JobArn: ComprehendArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the events detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:</p> <p> <code>arn:&lt;partition&gt;:comprehend:&lt;region&gt;:&lt;account-id&gt;:events-detection-job/&lt;job-id&gt;</code> </p> <p>The following is an example job ARN:</p> <p> <code>arn:aws:comprehend:us-west-2:111122223333:events-detection-job/1234abcd12ab34cd56ef1234567890ab</code> </p>',
        }),
    ).exactOptional(),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The name you assigned the events detection job.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z.any().openapi({ description: 'The current status of the events detection job.' }),
    ).exactOptional(),
    Message: AnyLengthStringSchema.and(
      z.any().openapi({ description: 'A description of the status of the events detection job.' }),
    ).exactOptional(),
    SubmitTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time that the events detection job was submitted for processing.',
        }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the events detection job completed.' }),
    ).exactOptional(),
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input data configuration that you supplied when you created the events detection job.',
        }),
    ).exactOptional(),
    OutputDataConfig: OutputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The output data configuration that you supplied when you created the events detection job.',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z.any().openapi({ description: 'The language code of the input documents.' }),
    ).exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.',
        }),
    ).exactOptional(),
    TargetEventTypes: TargetEventTypesSchema.and(
      z.any().openapi({ description: 'The types of events that are detected by the job.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about an events detection job.', required: [] })
  .openapi('EventsDetectionJobProperties')

const DescribeEventsDetectionJobResponseSchema = z
  .object({
    EventsDetectionJobProperties: EventsDetectionJobPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the properties associated with an event detection job.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEventsDetectionJobResponse')

const DescribeEventsDetectionJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier of the events detection job.' }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'DescribeEventsDetectionJobRequest' })
  .openapi('DescribeEventsDetectionJobRequest')

const FlywheelStatusSchema = z
  .enum(['CREATING', 'ACTIVE', 'UPDATING', 'DELETING', 'FAILED'])
  .openapi('FlywheelStatus')

const FlywheelIterationIdSchema = z
  .string()
  .regex(/[0-9]{8}T[0-9]{6}Z/)
  .max(63)
  .openapi('FlywheelIterationId')

const FlywheelPropertiesSchema = z
  .object({
    FlywheelArn: ComprehendFlywheelArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Number (ARN) of the flywheel.' }),
    ).exactOptional(),
    ActiveModelArn: ComprehendModelArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Number (ARN) of the active model version.' }),
    ).exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend permission to access the flywheel data.',
        }),
    ).exactOptional(),
    TaskConfig: TaskConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration about the custom classifier associated with the flywheel.',
        }),
    ).exactOptional(),
    DataLakeS3Uri: S3UriSchema.and(
      z.any().openapi({ description: 'Amazon S3 URI of the data lake location. ' }),
    ).exactOptional(),
    DataSecurityConfig: DataSecurityConfigSchema.and(
      z.any().openapi({ description: 'Data security configuration.' }),
    ).exactOptional(),
    Status: FlywheelStatusSchema.and(
      z.any().openapi({ description: 'The status of the flywheel.' }),
    ).exactOptional(),
    ModelType: ModelTypeSchema.and(
      z.any().openapi({ description: "Model type of the flywheel's model." }),
    ).exactOptional(),
    Message: AnyLengthStringSchema.and(
      z.any().openapi({ description: 'A description of the status of the flywheel.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'Creation time of the flywheel.' }),
    ).exactOptional(),
    LastModifiedTime: TimestampSchema.and(
      z.any().openapi({ description: 'Last modified time for the flywheel.' }),
    ).exactOptional(),
    LatestFlywheelIteration: FlywheelIterationIdSchema.and(
      z.any().openapi({ description: 'The most recent flywheel iteration.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The flywheel properties.', required: [] })
  .openapi('FlywheelProperties')

const DescribeFlywheelResponseSchema = z
  .object({
    FlywheelProperties: FlywheelPropertiesSchema.and(
      z.any().openapi({ description: 'The flywheel properties.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFlywheelResponse')

const DescribeFlywheelRequestSchema = z
  .object({
    FlywheelArn: ComprehendFlywheelArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Number (ARN) of the flywheel.' }),
    ),
  })
  .openapi({ required: ['FlywheelArn'], title: 'DescribeFlywheelRequest' })
  .openapi('DescribeFlywheelRequest')

const FlywheelIterationStatusSchema = z
  .enum(['TRAINING', 'EVALUATING', 'COMPLETED', 'FAILED', 'STOP_REQUESTED', 'STOPPED'])
  .openapi('FlywheelIterationStatus')

const FlywheelModelEvaluationMetricsSchema = z
  .object({
    AverageF1Score: DoubleSchema.and(
      z.any().openapi({ description: 'The average F1 score from the evaluation metrics.' }),
    ).exactOptional(),
    AveragePrecision: DoubleSchema.and(
      z.any().openapi({ description: 'Average precision metric for the model.' }),
    ).exactOptional(),
    AverageRecall: DoubleSchema.and(
      z.any().openapi({ description: 'Average recall metric for the model.' }),
    ).exactOptional(),
    AverageAccuracy: DoubleSchema.and(
      z.any().openapi({ description: 'Average accuracy metric for the model.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The evaluation metrics associated with the evaluated model.',
    required: [],
  })
  .openapi('FlywheelModelEvaluationMetrics')

const FlywheelIterationPropertiesSchema = z
  .object({
    FlywheelArn: ComprehendFlywheelArnSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    FlywheelIterationId: FlywheelIterationIdSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The creation start time of the flywheel iteration.' }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The completion time of this flywheel iteration.' }),
    ).exactOptional(),
    Status: FlywheelIterationStatusSchema.and(
      z.any().openapi({ description: 'The status of the flywheel iteration.' }),
    ).exactOptional(),
    Message: AnyLengthStringSchema.and(
      z.any().openapi({ description: 'A description of the status of the flywheel iteration.' }),
    ).exactOptional(),
    EvaluatedModelArn: ComprehendModelArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the evaluated model associated with this flywheel iteration.',
        }),
    ).exactOptional(),
    EvaluatedModelMetrics: FlywheelModelEvaluationMetricsSchema.exactOptional(),
    TrainedModelArn: ComprehendModelArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the trained model associated with this flywheel iteration.',
        }),
    ).exactOptional(),
    TrainedModelMetrics: FlywheelModelEvaluationMetricsSchema.and(
      z.any().openapi({ description: 'The metrics associated with the trained model.' }),
    ).exactOptional(),
    EvaluationManifestS3Prefix: S3UriSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The configuration properties of a flywheel iteration.', required: [] })
  .openapi('FlywheelIterationProperties')

const DescribeFlywheelIterationResponseSchema = z
  .object({
    FlywheelIterationProperties: FlywheelIterationPropertiesSchema.and(
      z.any().openapi({ description: 'The configuration properties of a flywheel iteration.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFlywheelIterationResponse')

const DescribeFlywheelIterationRequestSchema = z
  .object({
    FlywheelArn: ComprehendFlywheelArnSchema.and(z.any().openapi({ description: '<p/>' })),
    FlywheelIterationId: FlywheelIterationIdSchema.and(z.any().openapi({ description: '<p/>' })),
  })
  .openapi({
    required: ['FlywheelArn', 'FlywheelIterationId'],
    title: 'DescribeFlywheelIterationRequest',
  })
  .openapi('DescribeFlywheelIterationRequest')

const KeyPhrasesDetectionJobPropertiesSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier assigned to the key phrases detection job.' }),
    ).exactOptional(),
    JobArn: ComprehendArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the key phrases detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:</p> <p> <code>arn:&lt;partition&gt;:comprehend:&lt;region&gt;:&lt;account-id&gt;:key-phrases-detection-job/&lt;job-id&gt;</code> </p> <p>The following is an example job ARN:</p> <p> <code>arn:aws:comprehend:us-west-2:111122223333:key-phrases-detection-job/1234abcd12ab34cd56ef1234567890ab</code> </p>',
        }),
    ).exactOptional(),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The name that you assigned the key phrases detection job.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the key phrases detection job. If the status is <code>FAILED</code>, the <code>Message</code> field shows the reason for the failure.',
        }),
    ).exactOptional(),
    Message: AnyLengthStringSchema.and(
      z.any().openapi({ description: 'A description of the status of a job.' }),
    ).exactOptional(),
    SubmitTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time that the key phrases detection job was submitted for processing.',
        }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the key phrases detection job completed.' }),
    ).exactOptional(),
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input data configuration that you supplied when you created the key phrases detection job.',
        }),
    ).exactOptional(),
    OutputDataConfig: OutputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The output data configuration that you supplied when you created the key phrases detection job.',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z.any().openapi({ description: 'The language code of the input documents.' }),
    ).exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.',
        }),
    ).exactOptional(),
    VolumeKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the KMS key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your key phrases detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about a key phrases detection job.', required: [] })
  .openapi('KeyPhrasesDetectionJobProperties')

const DescribeKeyPhrasesDetectionJobResponseSchema = z
  .object({
    KeyPhrasesDetectionJobProperties: KeyPhrasesDetectionJobPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the properties associated with a key phrases detection job. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeKeyPhrasesDetectionJobResponse')

const DescribeKeyPhrasesDetectionJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier that Amazon Comprehend generated for the job. The <code>StartKeyPhrasesDetectionJob</code> operation returns this identifier in its response.',
        }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'DescribeKeyPhrasesDetectionJobRequest' })
  .openapi('DescribeKeyPhrasesDetectionJobRequest')

const PiiOutputDataConfigSchema = z
  .object({
    S3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When you use the <code>PiiOutputDataConfig</code> object with asynchronous operations, you specify the Amazon S3 location where you want to write the output data. </p> <p> For a PII entity detection job, the output file is plain text, not a compressed archive. The output file name is the same as the input file, with <code>.out</code> appended at the end. </p>',
        }),
    ),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the output results from an analysis job.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['S3Uri'],
    description: 'Provides configuration parameters for the output of PII entity detection jobs.',
  })
  .openapi('PiiOutputDataConfig')

const ListOfPiiEntityTypesSchema = z.array(PiiEntityTypeSchema).openapi('ListOfPiiEntityTypes')

const PiiEntitiesDetectionMaskModeSchema = z
  .enum(['MASK', 'REPLACE_WITH_PII_ENTITY_TYPE'])
  .openapi('PiiEntitiesDetectionMaskMode')

const MaskCharacterSchema = z
  .string()
  .regex(/[!@#$%&*]/)
  .length(1)
  .openapi('MaskCharacter')

const RedactionConfigSchema = z
  .object({
    PiiEntityTypes: ListOfPiiEntityTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of the types of PII entities that Amazon Comprehend detects in the input text for your request.',
        }),
    ).exactOptional(),
    MaskMode: PiiEntitiesDetectionMaskModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the PII entity is redacted with the mask character or the entity type.',
        }),
    ).exactOptional(),
    MaskCharacter: MaskCharacterSchema.and(
      z
        .any()
        .openapi({
          description: 'A character that replaces each character in the redacted PII entity.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides configuration parameters for PII entity redaction.',
    required: [],
  })
  .openapi('RedactionConfig')

const PiiEntitiesDetectionModeSchema = z
  .enum(['ONLY_REDACTION', 'ONLY_OFFSETS'])
  .openapi('PiiEntitiesDetectionMode')

const PiiEntitiesDetectionJobPropertiesSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier assigned to the PII entities detection job.' }),
    ).exactOptional(),
    JobArn: ComprehendArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the PII entities detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:</p> <p> <code>arn:&lt;partition&gt;:comprehend:&lt;region&gt;:&lt;account-id&gt;:pii-entities-detection-job/&lt;job-id&gt;</code> </p> <p>The following is an example job ARN:</p> <p> <code>arn:aws:comprehend:us-west-2:111122223333:pii-entities-detection-job/1234abcd12ab34cd56ef1234567890ab</code> </p>',
        }),
    ).exactOptional(),
    JobName: JobNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name that you assigned the PII entities detection job.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the PII entities detection job. If the status is <code>FAILED</code>, the <code>Message</code> field shows the reason for the failure.',
        }),
    ).exactOptional(),
    Message: AnyLengthStringSchema.and(
      z.any().openapi({ description: 'A description of the status of a job.' }),
    ).exactOptional(),
    SubmitTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time that the PII entities detection job was submitted for processing.',
        }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the PII entities detection job completed.' }),
    ).exactOptional(),
    InputDataConfig: InputDataConfigSchema.and(
      z.any().openapi({ description: 'The input properties for a PII entities detection job.' }),
    ).exactOptional(),
    OutputDataConfig: PiiOutputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The output data configuration that you supplied when you created the PII entities detection job.',
        }),
    ).exactOptional(),
    RedactionConfig: RedactionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Provides configuration parameters for PII entity redaction.</p> <p>This parameter is required if you set the <code>Mode</code> parameter to <code>ONLY_REDACTION</code>. In that case, you must provide a <code>RedactionConfig</code> definition that includes the <code>PiiEntityTypes</code> parameter.</p>',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z.any().openapi({ description: 'The language code of the input documents' }),
    ).exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.',
        }),
    ).exactOptional(),
    Mode: PiiEntitiesDetectionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the output provides the locations (offsets) of PII entities or a file in which PII entities are redacted.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about a PII entities detection job.',
    required: [],
  })
  .openapi('PiiEntitiesDetectionJobProperties')

const DescribePiiEntitiesDetectionJobResponseSchema = z
  .object({
    PiiEntitiesDetectionJobProperties: PiiEntitiesDetectionJobPropertiesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribePiiEntitiesDetectionJobResponse')

const DescribePiiEntitiesDetectionJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier that Amazon Comprehend generated for the job. The operation returns this identifier in its response.',
        }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'DescribePiiEntitiesDetectionJobRequest' })
  .openapi('DescribePiiEntitiesDetectionJobRequest')

const DescribeResourcePolicyResponseSchema = z
  .object({
    ResourcePolicy: PolicySchema.and(
      z.any().openapi({ description: 'The JSON body of the resource-based policy.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the policy was created.' }),
    ).exactOptional(),
    LastModifiedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the policy was last modified.' }),
    ).exactOptional(),
    PolicyRevisionId: PolicyRevisionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The revision ID of the policy. Each time you modify a policy, Amazon Comprehend assigns a new revision ID, and it deletes the prior version of the policy.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeResourcePolicyResponse')

const DescribeResourcePolicyRequestSchema = z
  .object({
    ResourceArn: ComprehendModelArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the custom model version that has the resource policy.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'DescribeResourcePolicyRequest' })
  .openapi('DescribeResourcePolicyRequest')

const SentimentDetectionJobPropertiesSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier assigned to the sentiment detection job.' }),
    ).exactOptional(),
    JobArn: ComprehendArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the sentiment detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:</p> <p> <code>arn:&lt;partition&gt;:comprehend:&lt;region&gt;:&lt;account-id&gt;:sentiment-detection-job/&lt;job-id&gt;</code> </p> <p>The following is an example job ARN:</p> <p> <code>arn:aws:comprehend:us-west-2:111122223333:sentiment-detection-job/1234abcd12ab34cd56ef1234567890ab</code> </p>',
        }),
    ).exactOptional(),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The name that you assigned to the sentiment detection job' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the sentiment detection job. If the status is <code>FAILED</code>, the <code>Messages</code> field shows the reason for the failure.',
        }),
    ).exactOptional(),
    Message: AnyLengthStringSchema.and(
      z.any().openapi({ description: 'A description of the status of a job.' }),
    ).exactOptional(),
    SubmitTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time that the sentiment detection job was submitted for processing.',
        }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the sentiment detection job ended.' }),
    ).exactOptional(),
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input data configuration that you supplied when you created the sentiment detection job.',
        }),
    ).exactOptional(),
    OutputDataConfig: OutputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The output data configuration that you supplied when you created the sentiment detection job.',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z.any().openapi({ description: 'The language code of the input documents.' }),
    ).exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.',
        }),
    ).exactOptional(),
    VolumeKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your sentiment detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about a sentiment detection job.', required: [] })
  .openapi('SentimentDetectionJobProperties')

const DescribeSentimentDetectionJobResponseSchema = z
  .object({
    SentimentDetectionJobProperties: SentimentDetectionJobPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the properties associated with a sentiment detection job.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeSentimentDetectionJobResponse')

const DescribeSentimentDetectionJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier that Amazon Comprehend generated for the job. The operation returns this identifier in its response.',
        }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'DescribeSentimentDetectionJobRequest' })
  .openapi('DescribeSentimentDetectionJobRequest')

const TargetedSentimentDetectionJobPropertiesSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier assigned to the targeted sentiment detection job.',
        }),
    ).exactOptional(),
    JobArn: ComprehendArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the targeted sentiment detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:</p> <p> <code>arn:&lt;partition&gt;:comprehend:&lt;region&gt;:&lt;account-id&gt;:targeted-sentiment-detection-job/&lt;job-id&gt;</code> </p> <p>The following is an example job ARN:</p> <p> <code>arn:aws:comprehend:us-west-2:111122223333:targeted-sentiment-detection-job/1234abcd12ab34cd56ef1234567890ab</code> </p>',
        }),
    ).exactOptional(),
    JobName: JobNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name that you assigned to the targeted sentiment detection job.',
        }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the targeted sentiment detection job. If the status is <code>FAILED</code>, the <code>Messages</code> field shows the reason for the failure.',
        }),
    ).exactOptional(),
    Message: AnyLengthStringSchema.and(
      z.any().openapi({ description: 'A description of the status of a job.' }),
    ).exactOptional(),
    SubmitTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that the targeted sentiment detection job was submitted for processing.',
        }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the targeted sentiment detection job ended.' }),
    ).exactOptional(),
    InputDataConfig: InputDataConfigSchema.exactOptional(),
    OutputDataConfig: OutputDataConfigSchema.exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z.any().openapi({ description: 'The language code of the input documents.' }),
    ).exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.',
        }),
    ).exactOptional(),
    VolumeKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the KMS key that Amazon Comprehend uses to encrypt the data on the storage volume attached to the ML compute instance(s) that process the targeted sentiment detection job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.exactOptional(),
  })
  .openapi({
    description: 'Provides information about a targeted sentiment detection job.',
    required: [],
  })
  .openapi('TargetedSentimentDetectionJobProperties')

const DescribeTargetedSentimentDetectionJobResponseSchema = z
  .object({
    TargetedSentimentDetectionJobProperties: TargetedSentimentDetectionJobPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the properties associated with a targeted sentiment detection job.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeTargetedSentimentDetectionJobResponse')

const DescribeTargetedSentimentDetectionJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier that Amazon Comprehend generated for the job. The <code>StartTargetedSentimentDetectionJob</code> operation returns this identifier in its response.',
        }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'DescribeTargetedSentimentDetectionJobRequest' })
  .openapi('DescribeTargetedSentimentDetectionJobRequest')

const TopicsDetectionJobPropertiesSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier assigned to the topic detection job.' }),
    ).exactOptional(),
    JobArn: ComprehendArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the topics detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:</p> <p> <code>arn:&lt;partition&gt;:comprehend:&lt;region&gt;:&lt;account-id&gt;:topics-detection-job/&lt;job-id&gt;</code> </p> <p>The following is an example job ARN:</p> <p> <code>arn:aws:comprehend:us-west-2:111122223333:topics-detection-job/1234abcd12ab34cd56ef1234567890ab</code> </p>',
        }),
    ).exactOptional(),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The name of the topic detection job.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the topic detection job. If the status is <code>Failed</code>, the reason for the failure is shown in the <code>Message</code> field.',
        }),
    ).exactOptional(),
    Message: AnyLengthStringSchema.and(
      z.any().openapi({ description: 'A description for the status of a job.' }),
    ).exactOptional(),
    SubmitTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time that the topic detection job was submitted for processing.',
        }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the topic detection job was completed.' }),
    ).exactOptional(),
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input data configuration supplied when you created the topic detection job.',
        }),
    ).exactOptional(),
    OutputDataConfig: OutputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The output data configuration supplied when you created the topic detection job.',
        }),
    ).exactOptional(),
    NumberOfTopics: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of topics to detect supplied when you created the topic detection job. The default is 10. ',
        }),
    ).exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your job data. ',
        }),
    ).exactOptional(),
    VolumeKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your topic detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about a topic detection job.', required: [] })
  .openapi('TopicsDetectionJobProperties')

const DescribeTopicsDetectionJobResponseSchema = z
  .object({
    TopicsDetectionJobProperties: TopicsDetectionJobPropertiesSchema.and(
      z.any().openapi({ description: 'The list of properties for the requested job.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeTopicsDetectionJobResponse')

const DescribeTopicsDetectionJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier assigned by the user to the detection job.' }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'DescribeTopicsDetectionJobRequest' })
  .openapi('DescribeTopicsDetectionJobRequest')

const DetectDominantLanguageResponseSchema = z
  .object({
    Languages: ListOfDominantLanguagesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Array of languages that Amazon Comprehend detected in the input text. The array is sorted in descending order of the score (the dominant language is always the first element in the array).</p> <p>For each language, the response returns the RFC 5646 language code and the level of confidence that Amazon Comprehend has in the accuracy of its inference. For more information about RFC 5646, see <a href="https://tools.ietf.org/html/rfc5646">Tags for Identifying Languages</a> on the <i>IETF Tools</i> web site.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DetectDominantLanguageResponse')

const DetectDominantLanguageRequestSchema = z
  .object({
    Text: CustomerInputStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A UTF-8 text string. The string must contain at least 20 characters. The maximum string size is 100 KB.',
        }),
    ),
  })
  .openapi({ required: ['Text'], title: 'DetectDominantLanguageRequest' })
  .openapi('DetectDominantLanguageRequest')

const BlockTypeSchema = z.enum(['LINE', 'WORD']).openapi('BlockType')

const BoundingBoxSchema = z
  .object({
    Height: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The height of the bounding box as a ratio of the overall document page height.',
        }),
    ).exactOptional(),
    Left: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The left coordinate of the bounding box as a ratio of overall document page width.',
        }),
    ).exactOptional(),
    Top: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The top coordinate of the bounding box as a ratio of overall document page height.',
        }),
    ).exactOptional(),
    Width: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The width of the bounding box as a ratio of the overall document page width.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The bounding box around the detected page or around an element on a document page. The left (x-coordinate) and top (y-coordinate) are coordinates that represent the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_BoundingBox.html">BoundingBox</a> in the Amazon Textract API reference.</p>',
    required: [],
  })
  .openapi('BoundingBox')

const PointSchema = z
  .object({
    X: FloatSchema.and(
      z.any().openapi({ description: 'The value of the X coordinate for a point on a polygon' }),
    ).exactOptional(),
    Y: FloatSchema.and(
      z.any().openapi({ description: 'The value of the Y coordinate for a point on a polygon' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The X and Y coordinates of a point on a document page.</p> <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_Point.html">Point</a> in the Amazon Textract API reference.</p>',
    required: [],
  })
  .openapi('Point')

const PolygonSchema = z.array(PointSchema).openapi('Polygon')

const GeometrySchema = z
  .object({
    BoundingBox: BoundingBoxSchema.and(
      z
        .any()
        .openapi({
          description:
            'An axis-aligned coarse representation of the location of the recognized item on the document page.',
        }),
    ).exactOptional(),
    Polygon: PolygonSchema.and(
      z
        .any()
        .openapi({
          description:
            'Within the bounding box, a fine-grained polygon around the recognized item.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Information about the location of items on a document page.</p> <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_Geometry.html">Geometry</a> in the Amazon Textract API reference.</p>',
    required: [],
  })
  .openapi('Geometry')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const RelationshipTypeSchema = z.literal('CHILD').openapi('RelationshipType')

const RelationshipsListItemSchema = z
  .object({
    Ids: StringListSchema.and(
      z.any().openapi({ description: 'Identifers of the child blocks.' }),
    ).exactOptional(),
    Type: RelationshipTypeSchema.and(
      z.any().openapi({ description: 'Only supported relationship is a child relationship.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'List of child blocks for the current block.', required: [] })
  .openapi('RelationshipsListItem')

const ListOfRelationshipsSchema = z
  .array(RelationshipsListItemSchema)
  .openapi('ListOfRelationships')

const BlockSchema = z
  .object({
    Id: StringSchema.and(
      z.any().openapi({ description: 'Unique identifier for the block.' }),
    ).exactOptional(),
    BlockType: BlockTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The block represents a line of text or one word of text.</p> <ul> <li> <p>WORD - A word that's detected on a document page. A word is one or more ISO basic Latin script characters that aren't separated by spaces.</p> </li> <li> <p>LINE - A string of tab-delimited, contiguous words that are detected on a document page</p> </li> </ul>",
        }),
    ).exactOptional(),
    Text: StringSchema.and(
      z.any().openapi({ description: 'The word or line of text extracted from the block.' }),
    ).exactOptional(),
    Page: IntegerSchema.and(
      z.any().openapi({ description: 'Page number where the block appears.' }),
    ).exactOptional(),
    Geometry: GeometrySchema.and(
      z
        .any()
        .openapi({
          description: 'Co-ordinates of the rectangle or polygon that contains the text.',
        }),
    ).exactOptional(),
    Relationships: ListOfRelationshipsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of child blocks of the current block. For example, a LINE object has child blocks for each WORD block that's part of the line of text. ",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Information about each word or line of text in the input document.</p> <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_Block.html">Block</a> in the Amazon Textract API reference.</p>',
    required: [],
  })
  .openapi('Block')

const ListOfBlocksSchema = z.array(BlockSchema).openapi('ListOfBlocks')

const DetectEntitiesResponseSchema = z
  .object({
    Entities: ListOfEntitiesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A collection of entities identified in the input text. For each entity, the response provides the entity text, entity type, where the entity text begins and ends, and the level of confidence that Amazon Comprehend has in the detection. </p> <p>If your request uses a custom entity recognition model, Amazon Comprehend detects the entities that the model is trained to recognize. Otherwise, it detects the default entity types. For a list of default entity types, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide. </p>',
        }),
    ).exactOptional(),
    DocumentMetadata: DocumentMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the document, discovered during text extraction. This field is present in the response only if your request used the <code>Byte</code> parameter. ',
        }),
    ).exactOptional(),
    DocumentType: ListOfDocumentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The document type for each page in the input document. This field is present in the response only if your request used the <code>Byte</code> parameter. ',
        }),
    ).exactOptional(),
    Blocks: ListOfBlocksSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about each block of text in the input document. Blocks are nested. A page block contains a block for each line of text, which contains a block for each word. </p> <p>The <code>Block</code> content for a Word input document does not include a <code>Geometry</code> field.</p> <p>The <code>Block</code> field is not present in the response for plain-text inputs.</p>',
        }),
    ).exactOptional(),
    Errors: ListOfErrorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Page-level errors that the system detected while processing the input document. The field is empty if the system encountered no errors.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DetectEntitiesResponse')

const EntityRecognizerEndpointArnSchema = z
  .string()
  .regex(
    /arn:aws(-[^:]+)?:comprehend:[a-zA-Z0-9-]*:[0-9]{12}:entity-recognizer-endpoint\/[a-zA-Z0-9](-*[a-zA-Z0-9])*/,
  )
  .max(256)
  .openapi('EntityRecognizerEndpointArn')

const DetectEntitiesRequestSchema = z
  .object({
    Text: CustomerInputStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A UTF-8 text string. The maximum string size is 100 KB. If you enter text using this parameter, do not use the <code>Bytes</code> parameter.',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. If your request includes the endpoint for a custom entity recognition model, Amazon Comprehend uses the language of your custom model, and it ignores any language code that you specify here.</p> <p>All input documents must be in the same language.</p>',
        }),
    ).exactOptional(),
    EndpointArn: EntityRecognizerEndpointArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name of an endpoint that is associated with a custom entity recognition model. Provide an endpoint if you want to detect entities by using your own custom model instead of the default model that is used by Amazon Comprehend.</p> <p>If you specify an endpoint, Amazon Comprehend uses the language of your custom model, and it ignores any language code that you provide in your request.</p> <p>For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.</p>',
        }),
    ).exactOptional(),
    Bytes: SemiStructuredDocumentBlobSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This field applies only when you use a custom entity recognition model that was trained with PDF annotations. For other cases, enter your text input in the <code>Text</code> field.</p> <p> Use the <code>Bytes</code> parameter to input a text, PDF, Word or image file. Using a plain-text file in the <code>Bytes</code> parameter is equivelent to using the <code>Text</code> parameter (the <code>Entities</code> field in the response is identical).</p> <p>You can also use the <code>Bytes</code> parameter to input an Amazon Textract <code>DetectDocumentText</code> or <code>AnalyzeDocument</code> output file.</p> <p>Provide the input document as a sequence of base64-encoded bytes. If your code uses an Amazon Web Services SDK to detect entities, the SDK may encode the document file bytes for you. </p> <p>The maximum length of this field depends on the input document type. For details, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync.html"> Inputs for real-time custom analysis</a> in the Comprehend Developer Guide. </p> <p>If you use the <code>Bytes</code> parameter, do not use the <code>Text</code> parameter.</p>',
        }),
    ).exactOptional(),
    DocumentReaderConfig: DocumentReaderConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides configuration parameters to override the default actions for extracting text from PDF documents and image files.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DetectEntitiesRequest', required: [] })
  .openapi('DetectEntitiesRequest')

const DetectKeyPhrasesResponseSchema = z
  .object({
    KeyPhrases: ListOfKeyPhrasesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of key phrases that Amazon Comprehend identified in the input text. For each key phrase, the response provides the text of the key phrase, where the key phrase begins and ends, and the level of confidence that Amazon Comprehend has in the accuracy of the detection. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DetectKeyPhrasesResponse')

const DetectKeyPhrasesRequestSchema = z
  .object({
    Text: CustomerInputStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A UTF-8 text string. The string must contain less than 100 KB of UTF-8 encoded characters.',
        }),
    ),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language.',
        }),
    ),
  })
  .openapi({ required: ['Text', 'LanguageCode'], title: 'DetectKeyPhrasesRequest' })
  .openapi('DetectKeyPhrasesRequest')

const PiiEntitySchema = z
  .object({
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Amazon Comprehend has in the accuracy of the detection.',
        }),
    ).exactOptional(),
    Type: PiiEntityTypeSchema.and(
      z.any().openapi({ description: "The entity's type." }),
    ).exactOptional(),
    BeginOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The zero-based offset from the beginning of the source text to the first character in the entity.',
        }),
    ).exactOptional(),
    EndOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The zero-based offset from the beginning of the source text to the last character in the entity.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about a PII entity.', required: [] })
  .openapi('PiiEntity')

const ListOfPiiEntitiesSchema = z.array(PiiEntitySchema).openapi('ListOfPiiEntities')

const DetectPiiEntitiesResponseSchema = z
  .object({
    Entities: ListOfPiiEntitiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of PII entities identified in the input text. For each entity, the response provides the entity type, where the entity text begins and ends, and the level of confidence that Amazon Comprehend has in the detection.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DetectPiiEntitiesResponse')

const DetectPiiEntitiesRequestSchema = z
  .object({
    Text: StringSchema.and(
      z.any().openapi({ description: 'A UTF-8 text string. The maximum string size is 100 KB.' }),
    ),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language of the input documents. Currently, English is the only valid language.',
        }),
    ),
  })
  .openapi({ required: ['Text', 'LanguageCode'], title: 'DetectPiiEntitiesRequest' })
  .openapi('DetectPiiEntitiesRequest')

const DetectSentimentResponseSchema = z
  .object({
    Sentiment: SentimentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The inferred sentiment that Amazon Comprehend has the highest level of confidence in.',
        }),
    ).exactOptional(),
    SentimentScore: SentimentScoreSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that lists the sentiments, and their corresponding confidence levels.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DetectSentimentResponse')

const DetectSentimentRequestSchema = z
  .object({
    Text: CustomerInputStringSchema.and(
      z.any().openapi({ description: 'A UTF-8 text string. The maximum string size is 5 KB.' }),
    ),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language.',
        }),
    ),
  })
  .openapi({ required: ['Text', 'LanguageCode'], title: 'DetectSentimentRequest' })
  .openapi('DetectSentimentRequest')

const DetectSyntaxResponseSchema = z
  .object({
    SyntaxTokens: ListOfSyntaxTokensSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of syntax tokens describing the text. For each token, the response provides the text, the token type, where the text begins and ends, and the level of confidence that Amazon Comprehend has that the token is correct. For a list of token types, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DetectSyntaxResponse')

const DetectSyntaxRequestSchema = z
  .object({
    Text: CustomerInputStringSchema.and(
      z.any().openapi({ description: 'A UTF-8 string. The maximum string size is 5 KB.' }),
    ),
    LanguageCode: SyntaxLanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language code of the input documents. You can specify any of the following languages supported by Amazon Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"), Italian ("it"), or Portuguese ("pt").',
        }),
    ),
  })
  .openapi({ required: ['Text', 'LanguageCode'], title: 'DetectSyntaxRequest' })
  .openapi('DetectSyntaxRequest')

const DetectTargetedSentimentResponseSchema = z
  .object({
    Entities: ListOfTargetedSentimentEntitiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Targeted sentiment analysis for each of the entities identified in the input text.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DetectTargetedSentimentResponse')

const DetectTargetedSentimentRequestSchema = z
  .object({
    Text: CustomerInputStringSchema.and(
      z.any().openapi({ description: 'A UTF-8 text string. The maximum string length is 5 KB.' }),
    ),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language of the input documents. Currently, English is the only supported language.',
        }),
    ),
  })
  .openapi({ required: ['Text', 'LanguageCode'], title: 'DetectTargetedSentimentRequest' })
  .openapi('DetectTargetedSentimentRequest')

const ImportModelResponseSchema = z
  .object({
    ModelArn: ComprehendModelArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the custom model being imported.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportModelResponse')

const ImportModelRequestSchema = z
  .object({
    SourceModelArn: ComprehendModelArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the custom model to import.' }),
    ),
    ModelName: ComprehendArnNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name to assign to the custom model that is created in Amazon Comprehend by this import.',
        }),
    ).exactOptional(),
    VersionName: VersionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version name given to the custom model that is created by this import. Version names can have a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The version name must be unique among all models with the same classifier name in the account/Region.',
        }),
    ).exactOptional(),
    ModelKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend permission to use Amazon Key Management Service (KMS) to encrypt or decrypt the custom model.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags to associate with the custom model that is created by this import. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SourceModelArn'], title: 'ImportModelRequest' })
  .openapi('ImportModelRequest')

const DatasetPropertiesListSchema = z
  .array(DatasetPropertiesSchema)
  .openapi('DatasetPropertiesList')

const ListDatasetsResponseSchema = z
  .object({
    DatasetPropertiesList: DatasetPropertiesListSchema.and(
      z.any().openapi({ description: 'The dataset properties list.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDatasetsResponse')

const DatasetFilterSchema = z
  .object({
    Status: DatasetStatusSchema.and(
      z.any().openapi({ description: 'Filter the datasets based on the dataset status.' }),
    ).exactOptional(),
    DatasetType: DatasetTypeSchema.and(
      z.any().openapi({ description: 'Filter the datasets based on the dataset type.' }),
    ).exactOptional(),
    CreationTimeAfter: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'Filter the datasets to include datasets created after the specified time.',
        }),
    ).exactOptional(),
    CreationTimeBefore: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'Filter the datasets to include datasets created before the specified time.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Filter the datasets based on creation time or dataset status.',
    required: [],
  })
  .openapi('DatasetFilter')

const MaxResultsIntegerSchema = z.int().min(1).max(500).openapi('MaxResultsInteger')

const ListDatasetsRequestSchema = z
  .object({
    FlywheelArn: ComprehendFlywheelArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Number (ARN) of the flywheel.' }),
    ).exactOptional(),
    Filter: DatasetFilterSchema.and(
      z.any().openapi({ description: 'Filters the datasets to be returned in the response.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'Maximum number of results to return in a response. The default is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDatasetsRequest', required: [] })
  .openapi('ListDatasetsRequest')

const InvalidFilterExceptionSchema = z.any().openapi('InvalidFilterException')

const DocumentClassificationJobPropertiesListSchema = z
  .array(DocumentClassificationJobPropertiesSchema)
  .openapi('DocumentClassificationJobPropertiesList')

const ListDocumentClassificationJobsResponseSchema = z
  .object({
    DocumentClassificationJobPropertiesList: DocumentClassificationJobPropertiesListSchema.and(
      z.any().openapi({ description: 'A list containing the properties of each job returned.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDocumentClassificationJobsResponse')

const DocumentClassificationJobFilterSchema = z
  .object({
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'Filters on the name of the job.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list based on job status. Returns only jobs with the specified status.',
        }),
    ).exactOptional(),
    SubmitTimeBefore: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.',
        }),
    ).exactOptional(),
    SubmitTimeAfter: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information for filtering a list of document classification jobs. For more information, see the operation. You can provide only one filter parameter in each request.',
    required: [],
  })
  .openapi('DocumentClassificationJobFilter')

const ListDocumentClassificationJobsRequestSchema = z
  .object({
    Filter: DocumentClassificationJobFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the jobs that are returned. You can filter jobs on their names, status, or the date and time that they were submitted. You can only set one filter at a time.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of results to return in each page. The default is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDocumentClassificationJobsRequest', required: [] })
  .openapi('ListDocumentClassificationJobsRequest')

const DocumentClassifierSummarySchema = z
  .object({
    DocumentClassifierName: ComprehendArnNameSchema.and(
      z.any().openapi({ description: 'The name that you assigned the document classifier.' }),
    ).exactOptional(),
    NumberOfVersions: IntegerSchema.and(
      z.any().openapi({ description: 'The number of versions you created.' }),
    ).exactOptional(),
    LatestVersionCreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that the latest document classifier version was submitted for processing.',
        }),
    ).exactOptional(),
    LatestVersionName: VersionNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The version name you assigned to the latest document classifier version.',
        }),
    ).exactOptional(),
    LatestVersionStatus: ModelStatusSchema.and(
      z
        .any()
        .openapi({ description: 'Provides the status of the latest document classifier version.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes information about a document classifier and its versions.',
    required: [],
  })
  .openapi('DocumentClassifierSummary')

const DocumentClassifierSummariesListSchema = z
  .array(DocumentClassifierSummarySchema)
  .openapi('DocumentClassifierSummariesList')

const ListDocumentClassifierSummariesResponseSchema = z
  .object({
    DocumentClassifierSummariesList: DocumentClassifierSummariesListSchema.and(
      z.any().openapi({ description: 'The list of summaries of document classifiers.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDocumentClassifierSummariesResponse')

const ListDocumentClassifierSummariesRequestSchema = z
  .object({
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of results to return on each page. The default is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDocumentClassifierSummariesRequest', required: [] })
  .openapi('ListDocumentClassifierSummariesRequest')

const DocumentClassifierPropertiesListSchema = z
  .array(DocumentClassifierPropertiesSchema)
  .openapi('DocumentClassifierPropertiesList')

const ListDocumentClassifiersResponseSchema = z
  .object({
    DocumentClassifierPropertiesList: DocumentClassifierPropertiesListSchema.and(
      z.any().openapi({ description: 'A list containing the properties of each job returned.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDocumentClassifiersResponse')

const DocumentClassifierFilterSchema = z
  .object({
    Status: ModelStatusSchema.and(
      z.any().openapi({ description: 'Filters the list of classifiers based on status.' }),
    ).exactOptional(),
    DocumentClassifierName: ComprehendArnNameSchema.and(
      z.any().openapi({ description: 'The name that you assigned to the document classifier' }),
    ).exactOptional(),
    SubmitTimeBefore: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of classifiers based on the time that the classifier was submitted for processing. Returns only classifiers submitted before the specified time. Classifiers are returned in ascending order, oldest to newest.',
        }),
    ).exactOptional(),
    SubmitTimeAfter: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of classifiers based on the time that the classifier was submitted for processing. Returns only classifiers submitted after the specified time. Classifiers are returned in descending order, newest to oldest.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information for filtering a list of document classifiers. You can only specify one filtering parameter in a request. For more information, see the <code>ListDocumentClassifiers</code> operation.',
    required: [],
  })
  .openapi('DocumentClassifierFilter')

const ListDocumentClassifiersRequestSchema = z
  .object({
    Filter: DocumentClassifierFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of results to return in each page. The default is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDocumentClassifiersRequest', required: [] })
  .openapi('ListDocumentClassifiersRequest')

const DominantLanguageDetectionJobPropertiesListSchema = z
  .array(DominantLanguageDetectionJobPropertiesSchema)
  .openapi('DominantLanguageDetectionJobPropertiesList')

const ListDominantLanguageDetectionJobsResponseSchema = z
  .object({
    DominantLanguageDetectionJobPropertiesList:
      DominantLanguageDetectionJobPropertiesListSchema.and(
        z
          .any()
          .openapi({
            description: 'A list containing the properties of each job that is returned.',
          }),
      ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDominantLanguageDetectionJobsResponse')

const DominantLanguageDetectionJobFilterSchema = z
  .object({
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'Filters on the name of the job.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on job status. Returns only jobs with the specified status.',
        }),
    ).exactOptional(),
    SubmitTimeBefore: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.',
        }),
    ).exactOptional(),
    SubmitTimeAfter: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.',
    required: [],
  })
  .openapi('DominantLanguageDetectionJobFilter')

const ListDominantLanguageDetectionJobsRequestSchema = z
  .object({
    Filter: DominantLanguageDetectionJobFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters that jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of results to return in each page. The default is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDominantLanguageDetectionJobsRequest', required: [] })
  .openapi('ListDominantLanguageDetectionJobsRequest')

const EndpointPropertiesListSchema = z
  .array(EndpointPropertiesSchema)
  .openapi('EndpointPropertiesList')

const ListEndpointsResponseSchema = z
  .object({
    EndpointPropertiesList: EndpointPropertiesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Displays a list of endpoint properties being retrieved by the service in response to the request.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEndpointsResponse')

const EndpointFilterSchema = z
  .object({
    ModelArn: ComprehendModelArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Number (ARN) of the model to which the endpoint is attached.',
        }),
    ).exactOptional(),
    Status: EndpointStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the status of the endpoint being returned. Possible values are: Creating, Ready, Updating, Deleting, Failed.',
        }),
    ).exactOptional(),
    CreationTimeBefore: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a date before which the returned endpoint or endpoints were created.',
        }),
    ).exactOptional(),
    CreationTimeAfter: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a date after which the returned endpoint or endpoints were created.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The filter used to determine which endpoints are returned. You can filter jobs on their name, model, status, or the date and time that they were created. You can only set one filter at a time. ',
    required: [],
  })
  .openapi('EndpointFilter')

const ListEndpointsRequestSchema = z
  .object({
    Filter: EndpointFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the endpoints that are returned. You can filter endpoints on their name, model, status, or the date and time that they were created. You can only set one filter at a time. ',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of results to return in each page. The default is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListEndpointsRequest', required: [] })
  .openapi('ListEndpointsRequest')

const EntitiesDetectionJobPropertiesListSchema = z
  .array(EntitiesDetectionJobPropertiesSchema)
  .openapi('EntitiesDetectionJobPropertiesList')

const ListEntitiesDetectionJobsResponseSchema = z
  .object({
    EntitiesDetectionJobPropertiesList: EntitiesDetectionJobPropertiesListSchema.and(
      z
        .any()
        .openapi({ description: 'A list containing the properties of each job that is returned.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEntitiesDetectionJobsResponse')

const EntitiesDetectionJobFilterSchema = z
  .object({
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'Filters on the name of the job.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on job status. Returns only jobs with the specified status.',
        }),
    ).exactOptional(),
    SubmitTimeBefore: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.',
        }),
    ).exactOptional(),
    SubmitTimeAfter: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.',
    required: [],
  })
  .openapi('EntitiesDetectionJobFilter')

const ListEntitiesDetectionJobsRequestSchema = z
  .object({
    Filter: EntitiesDetectionJobFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of results to return in each page. The default is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListEntitiesDetectionJobsRequest', required: [] })
  .openapi('ListEntitiesDetectionJobsRequest')

const EntityRecognizerSummarySchema = z
  .object({
    RecognizerName: ComprehendArnNameSchema.and(
      z.any().openapi({ description: ' The name that you assigned the entity recognizer.' }),
    ).exactOptional(),
    NumberOfVersions: IntegerSchema.and(
      z.any().openapi({ description: ' The number of versions you created.' }),
    ).exactOptional(),
    LatestVersionCreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The time that the latest entity recognizer version was submitted for processing.',
        }),
    ).exactOptional(),
    LatestVersionName: VersionNameSchema.and(
      z
        .any()
        .openapi({
          description: ' The version name you assigned to the latest entity recognizer version.',
        }),
    ).exactOptional(),
    LatestVersionStatus: ModelStatusSchema.and(
      z
        .any()
        .openapi({ description: ' Provides the status of the latest entity recognizer version.' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Describes the information about an entity recognizer and its versions.',
    required: [],
  })
  .openapi('EntityRecognizerSummary')

const EntityRecognizerSummariesListSchema = z
  .array(EntityRecognizerSummarySchema)
  .openapi('EntityRecognizerSummariesList')

const ListEntityRecognizerSummariesResponseSchema = z
  .object({
    EntityRecognizerSummariesList: EntityRecognizerSummariesListSchema.and(
      z.any().openapi({ description: 'The list entity recognizer summaries.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEntityRecognizerSummariesResponse')

const ListEntityRecognizerSummariesRequestSchema = z
  .object({
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of results to return on each page. The default is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListEntityRecognizerSummariesRequest', required: [] })
  .openapi('ListEntityRecognizerSummariesRequest')

const EntityRecognizerPropertiesListSchema = z
  .array(EntityRecognizerPropertiesSchema)
  .openapi('EntityRecognizerPropertiesList')

const ListEntityRecognizersResponseSchema = z
  .object({
    EntityRecognizerPropertiesList: EntityRecognizerPropertiesListSchema.and(
      z.any().openapi({ description: 'The list of properties of an entity recognizer.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEntityRecognizersResponse')

const EntityRecognizerFilterSchema = z
  .object({
    Status: ModelStatusSchema.and(
      z.any().openapi({ description: 'The status of an entity recognizer.' }),
    ).exactOptional(),
    RecognizerName: ComprehendArnNameSchema.and(
      z.any().openapi({ description: 'The name that you assigned the entity recognizer.' }),
    ).exactOptional(),
    SubmitTimeBefore: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of entities based on the time that the list was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in descending order, newest to oldest.',
        }),
    ).exactOptional(),
    SubmitTimeAfter: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of entities based on the time that the list was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in ascending order, oldest to newest.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information for filtering a list of entity recognizers. You can only specify one filtering parameter in a request. For more information, see the <code>ListEntityRecognizers</code> operation./&gt;',
    required: [],
  })
  .openapi('EntityRecognizerFilter')

const ListEntityRecognizersRequestSchema = z
  .object({
    Filter: EntityRecognizerFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of entities returned. You can filter on <code>Status</code>, <code>SubmitTimeBefore</code>, or <code>SubmitTimeAfter</code>. You can only set one filter at a time.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description: ' The maximum number of results to return on each page. The default is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListEntityRecognizersRequest', required: [] })
  .openapi('ListEntityRecognizersRequest')

const EventsDetectionJobPropertiesListSchema = z
  .array(EventsDetectionJobPropertiesSchema)
  .openapi('EventsDetectionJobPropertiesList')

const ListEventsDetectionJobsResponseSchema = z
  .object({
    EventsDetectionJobPropertiesList: EventsDetectionJobPropertiesListSchema.and(
      z
        .any()
        .openapi({ description: 'A list containing the properties of each job that is returned.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEventsDetectionJobsResponse')

const EventsDetectionJobFilterSchema = z
  .object({
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'Filters on the name of the events detection job.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on job status. Returns only jobs with the specified status.',
        }),
    ).exactOptional(),
    SubmitTimeBefore: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.',
        }),
    ).exactOptional(),
    SubmitTimeAfter: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information for filtering a list of event detection jobs.',
    required: [],
  })
  .openapi('EventsDetectionJobFilter')

const ListEventsDetectionJobsRequestSchema = z
  .object({
    Filter: EventsDetectionJobFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in each page.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListEventsDetectionJobsRequest', required: [] })
  .openapi('ListEventsDetectionJobsRequest')

const FlywheelIterationPropertiesListSchema = z
  .array(FlywheelIterationPropertiesSchema)
  .openapi('FlywheelIterationPropertiesList')

const ListFlywheelIterationHistoryResponseSchema = z
  .object({
    FlywheelIterationPropertiesList: FlywheelIterationPropertiesListSchema.and(
      z.any().openapi({ description: 'List of flywheel iteration properties' }),
    ).exactOptional(),
    NextToken: StringSchema.and(z.any().openapi({ description: 'Next token' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFlywheelIterationHistoryResponse')

const FlywheelIterationFilterSchema = z
  .object({
    CreationTimeAfter: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filter the flywheel iterations to include iterations created after the specified time.',
        }),
    ).exactOptional(),
    CreationTimeBefore: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filter the flywheel iterations to include iterations created before the specified time.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Filter the flywheel iterations based on creation time.', required: [] })
  .openapi('FlywheelIterationFilter')

const ListFlywheelIterationHistoryRequestSchema = z
  .object({
    FlywheelArn: ComprehendFlywheelArnSchema.and(
      z.any().openapi({ description: 'The ARN of the flywheel.' }),
    ),
    Filter: FlywheelIterationFilterSchema.and(
      z
        .any()
        .openapi({ description: 'Filter the flywheel iteration history based on creation time.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(z.any().openapi({ description: 'Next token' })).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z.any().openapi({ description: 'Maximum number of iteration history results to return' }),
    ).exactOptional(),
  })
  .openapi({ required: ['FlywheelArn'], title: 'ListFlywheelIterationHistoryRequest' })
  .openapi('ListFlywheelIterationHistoryRequest')

const FlywheelSummarySchema = z
  .object({
    FlywheelArn: ComprehendFlywheelArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Number (ARN) of the flywheel' }),
    ).exactOptional(),
    ActiveModelArn: ComprehendModelArnSchema.and(
      z.any().openapi({ description: 'ARN of the active model version for the flywheel.' }),
    ).exactOptional(),
    DataLakeS3Uri: S3UriSchema.and(
      z.any().openapi({ description: 'Amazon S3 URI of the data lake location. ' }),
    ).exactOptional(),
    Status: FlywheelStatusSchema.and(
      z.any().openapi({ description: 'The status of the flywheel.' }),
    ).exactOptional(),
    ModelType: ModelTypeSchema.and(
      z.any().openapi({ description: "Model type of the flywheel's model." }),
    ).exactOptional(),
    Message: AnyLengthStringSchema.and(
      z.any().openapi({ description: 'A description of the status of the flywheel.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'Creation time of the flywheel.' }),
    ).exactOptional(),
    LastModifiedTime: TimestampSchema.and(
      z.any().openapi({ description: 'Last modified time for the flywheel.' }),
    ).exactOptional(),
    LatestFlywheelIteration: FlywheelIterationIdSchema.and(
      z.any().openapi({ description: 'The most recent flywheel iteration.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Flywheel summary information.', required: [] })
  .openapi('FlywheelSummary')

const FlywheelSummaryListSchema = z.array(FlywheelSummarySchema).openapi('FlywheelSummaryList')

const ListFlywheelsResponseSchema = z
  .object({
    FlywheelSummaryList: FlywheelSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of flywheel properties retrieved by the service in response to the request. ',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFlywheelsResponse')

const FlywheelFilterSchema = z
  .object({
    Status: FlywheelStatusSchema.and(
      z.any().openapi({ description: 'Filter the flywheels based on the flywheel status.' }),
    ).exactOptional(),
    CreationTimeAfter: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filter the flywheels to include flywheels created after the specified time.',
        }),
    ).exactOptional(),
    CreationTimeBefore: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filter the flywheels to include flywheels created before the specified time.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Filter the flywheels based on creation time or flywheel status.',
    required: [],
  })
  .openapi('FlywheelFilter')

const ListFlywheelsRequestSchema = z
  .object({
    Filter: FlywheelFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the flywheels that are returned. You can filter flywheels on their status, or the date and time that they were submitted. You can only set one filter at a time. ',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'Maximum number of results to return in a response. The default is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListFlywheelsRequest', required: [] })
  .openapi('ListFlywheelsRequest')

const KeyPhrasesDetectionJobPropertiesListSchema = z
  .array(KeyPhrasesDetectionJobPropertiesSchema)
  .openapi('KeyPhrasesDetectionJobPropertiesList')

const ListKeyPhrasesDetectionJobsResponseSchema = z
  .object({
    KeyPhrasesDetectionJobPropertiesList: KeyPhrasesDetectionJobPropertiesListSchema.and(
      z
        .any()
        .openapi({ description: 'A list containing the properties of each job that is returned.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListKeyPhrasesDetectionJobsResponse')

const KeyPhrasesDetectionJobFilterSchema = z
  .object({
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'Filters on the name of the job.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on job status. Returns only jobs with the specified status.',
        }),
    ).exactOptional(),
    SubmitTimeBefore: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.',
        }),
    ).exactOptional(),
    SubmitTimeAfter: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.',
    required: [],
  })
  .openapi('KeyPhrasesDetectionJobFilter')

const ListKeyPhrasesDetectionJobsRequestSchema = z
  .object({
    Filter: KeyPhrasesDetectionJobFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of results to return in each page. The default is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListKeyPhrasesDetectionJobsRequest', required: [] })
  .openapi('ListKeyPhrasesDetectionJobsRequest')

const PiiEntitiesDetectionJobPropertiesListSchema = z
  .array(PiiEntitiesDetectionJobPropertiesSchema)
  .openapi('PiiEntitiesDetectionJobPropertiesList')

const ListPiiEntitiesDetectionJobsResponseSchema = z
  .object({
    PiiEntitiesDetectionJobPropertiesList: PiiEntitiesDetectionJobPropertiesListSchema.and(
      z
        .any()
        .openapi({ description: 'A list containing the properties of each job that is returned.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPiiEntitiesDetectionJobsResponse')

const PiiEntitiesDetectionJobFilterSchema = z
  .object({
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'Filters on the name of the job.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on job status. Returns only jobs with the specified status.',
        }),
    ).exactOptional(),
    SubmitTimeBefore: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.',
        }),
    ).exactOptional(),
    SubmitTimeAfter: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information for filtering a list of PII entity detection jobs.',
    required: [],
  })
  .openapi('PiiEntitiesDetectionJobFilter')

const ListPiiEntitiesDetectionJobsRequestSchema = z
  .object({
    Filter: PiiEntitiesDetectionJobFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in each page.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListPiiEntitiesDetectionJobsRequest', required: [] })
  .openapi('ListPiiEntitiesDetectionJobsRequest')

const SentimentDetectionJobPropertiesListSchema = z
  .array(SentimentDetectionJobPropertiesSchema)
  .openapi('SentimentDetectionJobPropertiesList')

const ListSentimentDetectionJobsResponseSchema = z
  .object({
    SentimentDetectionJobPropertiesList: SentimentDetectionJobPropertiesListSchema.and(
      z
        .any()
        .openapi({ description: 'A list containing the properties of each job that is returned.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSentimentDetectionJobsResponse')

const SentimentDetectionJobFilterSchema = z
  .object({
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'Filters on the name of the job.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on job status. Returns only jobs with the specified status.',
        }),
    ).exactOptional(),
    SubmitTimeBefore: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.',
        }),
    ).exactOptional(),
    SubmitTimeAfter: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.',
    required: [],
  })
  .openapi('SentimentDetectionJobFilter')

const ListSentimentDetectionJobsRequestSchema = z
  .object({
    Filter: SentimentDetectionJobFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of results to return in each page. The default is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListSentimentDetectionJobsRequest', required: [] })
  .openapi('ListSentimentDetectionJobsRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    ResourceArn: ComprehendArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the given Amazon Comprehend resource you are querying.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags associated with the Amazon Comprehend resource being queried. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceArn: ComprehendArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the given Amazon Comprehend resource you are querying. ',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const TargetedSentimentDetectionJobPropertiesListSchema = z
  .array(TargetedSentimentDetectionJobPropertiesSchema)
  .openapi('TargetedSentimentDetectionJobPropertiesList')

const ListTargetedSentimentDetectionJobsResponseSchema = z
  .object({
    TargetedSentimentDetectionJobPropertiesList:
      TargetedSentimentDetectionJobPropertiesListSchema.and(
        z
          .any()
          .openapi({
            description: 'A list containing the properties of each job that is returned.',
          }),
      ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTargetedSentimentDetectionJobsResponse')

const TargetedSentimentDetectionJobFilterSchema = z
  .object({
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'Filters on the name of the job.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on job status. Returns only jobs with the specified status.',
        }),
    ).exactOptional(),
    SubmitTimeBefore: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.',
        }),
    ).exactOptional(),
    SubmitTimeAfter: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information for filtering a list of dominant language detection jobs. For more information, see the <code>ListTargetedSentimentDetectionJobs</code> operation.',
    required: [],
  })
  .openapi('TargetedSentimentDetectionJobFilter')

const ListTargetedSentimentDetectionJobsRequestSchema = z
  .object({
    Filter: TargetedSentimentDetectionJobFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of results to return in each page. The default is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTargetedSentimentDetectionJobsRequest', required: [] })
  .openapi('ListTargetedSentimentDetectionJobsRequest')

const TopicsDetectionJobPropertiesListSchema = z
  .array(TopicsDetectionJobPropertiesSchema)
  .openapi('TopicsDetectionJobPropertiesList')

const ListTopicsDetectionJobsResponseSchema = z
  .object({
    TopicsDetectionJobPropertiesList: TopicsDetectionJobPropertiesListSchema.and(
      z
        .any()
        .openapi({ description: 'A list containing the properties of each job that is returned.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTopicsDetectionJobsResponse')

const TopicsDetectionJobFilterSchema = z
  .object({
    JobName: JobNameSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of topic detection jobs based on job status. Returns only jobs with the specified status.',
        }),
    ).exactOptional(),
    SubmitTimeBefore: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on the time that the job was submitted for processing. Only returns jobs submitted before the specified time. Jobs are returned in descending order, newest to oldest.',
        }),
    ).exactOptional(),
    SubmitTimeAfter: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on the time that the job was submitted for processing. Only returns jobs submitted after the specified time. Jobs are returned in ascending order, oldest to newest.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information for filtering topic detection jobs. For more information, see .',
    required: [],
  })
  .openapi('TopicsDetectionJobFilter')

const ListTopicsDetectionJobsRequestSchema = z
  .object({
    Filter: TopicsDetectionJobFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the jobs that are returned. Jobs can be filtered on their name, status, or the date and time that they were submitted. You can set only one filter at a time.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of results to return in each page. The default is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTopicsDetectionJobsRequest', required: [] })
  .openapi('ListTopicsDetectionJobsRequest')

const PutResourcePolicyResponseSchema = z
  .object({
    PolicyRevisionId: PolicyRevisionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The revision ID of the policy. Each time you modify a policy, Amazon Comprehend assigns a new revision ID, and it deletes the prior version of the policy.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutResourcePolicyResponse')

const PutResourcePolicyRequestSchema = z
  .object({
    ResourceArn: ComprehendModelArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the custom model to attach the policy to.',
        }),
    ),
    ResourcePolicy: PolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The JSON resource-based policy to attach to your custom model. Provide your JSON as a UTF-8 encoded string without line breaks. To provide valid JSON for your policy, enclose the attribute names and values in double quotes. If the JSON body is also enclosed in double quotes, then you must escape the double quotes that are inside the policy:</p> <p> <code>"{\\"attribute\\": \\"value\\", \\"attribute\\": [\\"value\\"]}"</code> </p> <p>To avoid escaping quotes, you can use single quotes to enclose the policy and double quotes to enclose the JSON names and values:</p> <p> <code>\'{"attribute": "value", "attribute": ["value"]}\'</code> </p>',
        }),
    ),
    PolicyRevisionId: PolicyRevisionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The revision ID that Amazon Comprehend assigned to the policy that you are updating. If you are creating a new policy that has no prior version, don't use this parameter. Amazon Comprehend creates the revision ID for you.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceArn', 'ResourcePolicy'], title: 'PutResourcePolicyRequest' })
  .openapi('PutResourcePolicyRequest')

const StartDocumentClassificationJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier generated for the job. To get the status of the job, use this identifier with the <code>DescribeDocumentClassificationJob</code> operation.',
        }),
    ).exactOptional(),
    JobArn: ComprehendArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the document classification job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:</p> <p> <code>arn:&lt;partition&gt;:comprehend:&lt;region&gt;:&lt;account-id&gt;:document-classification-job/&lt;job-id&gt;</code> </p> <p>The following is an example job ARN:</p> <p> <code>arn:aws:comprehend:us-west-2:111122223333:document-classification-job/1234abcd12ab34cd56ef1234567890ab</code> </p>',
        }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the job:</p> <ul> <li> <p>SUBMITTED - The job has been received and queued for processing.</p> </li> <li> <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p> </li> <li> <p>COMPLETED - The job was successfully completed and the output is available.</p> </li> <li> <p>FAILED - The job did not complete. For details, use the <code>DescribeDocumentClassificationJob</code> operation.</p> </li> <li> <p>STOP_REQUESTED - Amazon Comprehend has received a stop request for the job and is processing the request.</p> </li> <li> <p>STOPPED - The job was successfully stopped without completing.</p> </li> </ul>',
        }),
    ).exactOptional(),
    DocumentClassifierArn: DocumentClassifierArnSchema.and(
      z.any().openapi({ description: 'The ARN of the custom classification model.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartDocumentClassificationJobResponse')

const StartDocumentClassificationJobRequestSchema = z
  .object({
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The identifier of the job.' }),
    ).exactOptional(),
    DocumentClassifierArn: DocumentClassifierArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the document classifier to use to process the job.',
        }),
    ).exactOptional(),
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the format and location of the input data for the job.',
        }),
    ),
    OutputDataConfig: OutputDataConfigSchema.and(
      z.any().openapi({ description: 'Specifies where to send the output files.' }),
    ),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the request. If you do not set the client request token, Amazon Comprehend generates one.',
        }),
    ).exactOptional(),
    VolumeKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your document classification job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. ',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags to associate with the document classification job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.',
        }),
    ).exactOptional(),
    FlywheelArn: ComprehendFlywheelArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Number (ARN) of the flywheel associated with the model to use.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn'],
    title: 'StartDocumentClassificationJobRequest',
  })
  .openapi('StartDocumentClassificationJobRequest')

const StartDominantLanguageDetectionJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier generated for the job. To get the status of a job, use this identifier with the operation.',
        }),
    ).exactOptional(),
    JobArn: ComprehendArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the dominant language detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:</p> <p> <code>arn:&lt;partition&gt;:comprehend:&lt;region&gt;:&lt;account-id&gt;:dominant-language-detection-job/&lt;job-id&gt;</code> </p> <p>The following is an example job ARN:</p> <p> <code>arn:aws:comprehend:us-west-2:111122223333:dominant-language-detection-job/1234abcd12ab34cd56ef1234567890ab</code> </p>',
        }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the job. </p> <ul> <li> <p>SUBMITTED - The job has been received and is queued for processing.</p> </li> <li> <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p> </li> <li> <p>COMPLETED - The job was successfully completed and the output is available.</p> </li> <li> <p>FAILED - The job did not complete. To get details, use the operation.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartDominantLanguageDetectionJobResponse')

const StartDominantLanguageDetectionJobRequestSchema = z
  .object({
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the format and location of the input data for the job.',
        }),
    ),
    OutputDataConfig: OutputDataConfigSchema.and(
      z.any().openapi({ description: 'Specifies where to send the output files.' }),
    ),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions">Role-based permissions</a>.',
        }),
    ),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'An identifier for the job.' }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the request. If you do not set the client request token, Amazon Comprehend generates one.',
        }),
    ).exactOptional(),
    VolumeKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your dominant language detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. ',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags to associate with the dominant language detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn'],
    title: 'StartDominantLanguageDetectionJobRequest',
  })
  .openapi('StartDominantLanguageDetectionJobRequest')

const StartEntitiesDetectionJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier generated for the job. To get the status of job, use this identifier with the operation.',
        }),
    ).exactOptional(),
    JobArn: ComprehendArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the entities detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:</p> <p> <code>arn:&lt;partition&gt;:comprehend:&lt;region&gt;:&lt;account-id&gt;:entities-detection-job/&lt;job-id&gt;</code> </p> <p>The following is an example job ARN:</p> <p> <code>arn:aws:comprehend:us-west-2:111122223333:entities-detection-job/1234abcd12ab34cd56ef1234567890ab</code> </p>',
        }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the job. </p> <ul> <li> <p>SUBMITTED - The job has been received and is queued for processing.</p> </li> <li> <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p> </li> <li> <p>COMPLETED - The job was successfully completed and the output is available.</p> </li> <li> <p>FAILED - The job did not complete. To get details, use the operation.</p> </li> <li> <p>STOP_REQUESTED - Amazon Comprehend has received a stop request for the job and is processing the request.</p> </li> <li> <p>STOPPED - The job was successfully stopped without completing.</p> </li> </ul>',
        }),
    ).exactOptional(),
    EntityRecognizerArn: EntityRecognizerArnSchema.and(
      z.any().openapi({ description: 'The ARN of the custom entity recognition model.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartEntitiesDetectionJobResponse')

const StartEntitiesDetectionJobRequestSchema = z
  .object({
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the format and location of the input data for the job.',
        }),
    ),
    OutputDataConfig: OutputDataConfigSchema.and(
      z.any().openapi({ description: 'Specifies where to send the output files.' }),
    ),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions">Role-based permissions</a>.',
        }),
    ),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The identifier of the job.' }),
    ).exactOptional(),
    EntityRecognizerArn: EntityRecognizerArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that identifies the specific entity recognizer to be used by the <code>StartEntitiesDetectionJob</code>. This ARN is optional and is only used for a custom entity recognition job.',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language of the input documents. All documents must be in the same language. You can specify any of the languages supported by Amazon Comprehend. If custom entities recognition is used, this parameter is ignored and the language used for training the model is used instead.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
        }),
    ).exactOptional(),
    VolumeKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your entity detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. ',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags to associate with the entities detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.',
        }),
    ).exactOptional(),
    FlywheelArn: ComprehendFlywheelArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Number (ARN) of the flywheel associated with the model to use.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn', 'LanguageCode'],
    title: 'StartEntitiesDetectionJobRequest',
  })
  .openapi('StartEntitiesDetectionJobRequest')

const StartEventsDetectionJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "An unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
        }),
    ).exactOptional(),
    JobArn: ComprehendArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the events detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:</p> <p> <code>arn:&lt;partition&gt;:comprehend:&lt;region&gt;:&lt;account-id&gt;:events-detection-job/&lt;job-id&gt;</code> </p> <p>The following is an example job ARN:</p> <p> <code>arn:aws:comprehend:us-west-2:111122223333:events-detection-job/1234abcd12ab34cd56ef1234567890ab</code> </p>',
        }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z.any().openapi({ description: 'The status of the events detection job.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartEventsDetectionJobResponse')

const StartEventsDetectionJobRequestSchema = z
  .object({
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the format and location of the input data for the job.',
        }),
    ),
    OutputDataConfig: OutputDataConfigSchema.and(
      z.any().openapi({ description: 'Specifies where to send the output files.' }),
    ),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.',
        }),
    ),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The identifier of the events detection job.' }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z.any().openapi({ description: 'The language code of the input documents.' }),
    ),
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "An unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
        }),
    ).exactOptional(),
    TargetEventTypes: TargetEventTypesSchema.and(
      z.any().openapi({ description: 'The types of events to detect in the input documents.' }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags to associate with the events detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'InputDataConfig',
      'OutputDataConfig',
      'DataAccessRoleArn',
      'LanguageCode',
      'TargetEventTypes',
    ],
    title: 'StartEventsDetectionJobRequest',
  })
  .openapi('StartEventsDetectionJobRequest')

const StartFlywheelIterationResponseSchema = z
  .object({
    FlywheelArn: ComprehendFlywheelArnSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    FlywheelIterationId: FlywheelIterationIdSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartFlywheelIterationResponse')

const StartFlywheelIterationRequestSchema = z
  .object({
    FlywheelArn: ComprehendFlywheelArnSchema.and(
      z.any().openapi({ description: 'The ARN of the flywheel.' }),
    ),
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FlywheelArn'], title: 'StartFlywheelIterationRequest' })
  .openapi('StartFlywheelIterationRequest')

const StartKeyPhrasesDetectionJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier generated for the job. To get the status of a job, use this identifier with the operation.',
        }),
    ).exactOptional(),
    JobArn: ComprehendArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the key phrase detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:</p> <p> <code>arn:&lt;partition&gt;:comprehend:&lt;region&gt;:&lt;account-id&gt;:key-phrases-detection-job/&lt;job-id&gt;</code> </p> <p>The following is an example job ARN:</p> <p> <code>arn:aws:comprehend:us-west-2:111122223333:key-phrases-detection-job/1234abcd12ab34cd56ef1234567890ab</code> </p>',
        }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the job. </p> <ul> <li> <p>SUBMITTED - The job has been received and is queued for processing.</p> </li> <li> <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p> </li> <li> <p>COMPLETED - The job was successfully completed and the output is available.</p> </li> <li> <p>FAILED - The job did not complete. To get details, use the operation.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartKeyPhrasesDetectionJobResponse')

const StartKeyPhrasesDetectionJobRequestSchema = z
  .object({
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the format and location of the input data for the job.',
        }),
    ),
    OutputDataConfig: OutputDataConfigSchema.and(
      z.any().openapi({ description: 'Specifies where to send the output files.' }),
    ),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions">Role-based permissions</a>.',
        }),
    ),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The identifier of the job.' }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
        }),
    ).exactOptional(),
    VolumeKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your key phrases detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. ',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags to associate with the key phrases detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn', 'LanguageCode'],
    title: 'StartKeyPhrasesDetectionJobRequest',
  })
  .openapi('StartKeyPhrasesDetectionJobRequest')

const StartPiiEntitiesDetectionJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier generated for the job.' }),
    ).exactOptional(),
    JobArn: ComprehendArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the PII entity detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:</p> <p> <code>arn:&lt;partition&gt;:comprehend:&lt;region&gt;:&lt;account-id&gt;:pii-entities-detection-job/&lt;job-id&gt;</code> </p> <p>The following is an example job ARN:</p> <p> <code>arn:aws:comprehend:us-west-2:111122223333:pii-entities-detection-job/1234abcd12ab34cd56ef1234567890ab</code> </p>',
        }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z.any().openapi({ description: 'The status of the job.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartPiiEntitiesDetectionJobResponse')

const StartPiiEntitiesDetectionJobRequestSchema = z
  .object({
    InputDataConfig: InputDataConfigSchema.and(
      z.any().openapi({ description: 'The input properties for a PII entities detection job.' }),
    ),
    OutputDataConfig: OutputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides conﬁguration parameters for the output of PII entity detection jobs.',
        }),
    ),
    Mode: PiiEntitiesDetectionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the output provides the locations (offsets) of PII entities or a file in which PII entities are redacted.',
        }),
    ),
    RedactionConfig: RedactionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Provides configuration parameters for PII entity redaction.</p> <p>This parameter is required if you set the <code>Mode</code> parameter to <code>ONLY_REDACTION</code>. In that case, you must provide a <code>RedactionConfig</code> definition that includes the <code>PiiEntityTypes</code> parameter.</p>',
        }),
    ).exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.',
        }),
    ),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The identifier of the job.' }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language of the input documents. Currently, English is the only valid language.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags to associate with the PII entities detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InputDataConfig', 'OutputDataConfig', 'Mode', 'DataAccessRoleArn', 'LanguageCode'],
    title: 'StartPiiEntitiesDetectionJobRequest',
  })
  .openapi('StartPiiEntitiesDetectionJobRequest')

const StartSentimentDetectionJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier generated for the job. To get the status of a job, use this identifier with the operation.',
        }),
    ).exactOptional(),
    JobArn: ComprehendArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the sentiment detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:</p> <p> <code>arn:&lt;partition&gt;:comprehend:&lt;region&gt;:&lt;account-id&gt;:sentiment-detection-job/&lt;job-id&gt;</code> </p> <p>The following is an example job ARN:</p> <p> <code>arn:aws:comprehend:us-west-2:111122223333:sentiment-detection-job/1234abcd12ab34cd56ef1234567890ab</code> </p>',
        }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the job. </p> <ul> <li> <p>SUBMITTED - The job has been received and is queued for processing.</p> </li> <li> <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p> </li> <li> <p>COMPLETED - The job was successfully completed and the output is available.</p> </li> <li> <p>FAILED - The job did not complete. To get details, use the operation.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartSentimentDetectionJobResponse')

const StartSentimentDetectionJobRequestSchema = z
  .object({
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the format and location of the input data for the job.',
        }),
    ),
    OutputDataConfig: OutputDataConfigSchema.and(
      z.any().openapi({ description: 'Specifies where to send the output files. ' }),
    ),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions">Role-based permissions</a>.',
        }),
    ),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The identifier of the job.' }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
        }),
    ).exactOptional(),
    VolumeKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your sentiment detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. ',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags to associate with the sentiment detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn', 'LanguageCode'],
    title: 'StartSentimentDetectionJobRequest',
  })
  .openapi('StartSentimentDetectionJobRequest')

const StartTargetedSentimentDetectionJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier generated for the job. To get the status of a job, use this identifier with the <code>DescribeTargetedSentimentDetectionJob</code> operation.',
        }),
    ).exactOptional(),
    JobArn: ComprehendArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the targeted sentiment detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:</p> <p> <code>arn:&lt;partition&gt;:comprehend:&lt;region&gt;:&lt;account-id&gt;:targeted-sentiment-detection-job/&lt;job-id&gt;</code> </p> <p>The following is an example job ARN:</p> <p> <code>arn:aws:comprehend:us-west-2:111122223333:targeted-sentiment-detection-job/1234abcd12ab34cd56ef1234567890ab</code> </p>',
        }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the job. </p> <ul> <li> <p>SUBMITTED - The job has been received and is queued for processing.</p> </li> <li> <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p> </li> <li> <p>COMPLETED - The job was successfully completed and the output is available.</p> </li> <li> <p>FAILED - The job did not complete. To get details, use the <code>DescribeTargetedSentimentDetectionJob</code> operation.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartTargetedSentimentDetectionJobResponse')

const StartTargetedSentimentDetectionJobRequestSchema = z
  .object({
    InputDataConfig: InputDataConfigSchema,
    OutputDataConfig: OutputDataConfigSchema.and(
      z.any().openapi({ description: 'Specifies where to send the output files. ' }),
    ),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions">Role-based permissions</a>.',
        }),
    ),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The identifier of the job.' }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language of the input documents. Currently, English is the only supported language.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
        }),
    ).exactOptional(),
    VolumeKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the KMS key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags to associate with the targeted sentiment detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn', 'LanguageCode'],
    title: 'StartTargetedSentimentDetectionJobRequest',
  })
  .openapi('StartTargetedSentimentDetectionJobRequest')

const StartTopicsDetectionJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier generated for the job. To get the status of the job, use this identifier with the <code>DescribeTopicDetectionJob</code> operation.',
        }),
    ).exactOptional(),
    JobArn: ComprehendArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the topics detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows:</p> <p> <code>arn:&lt;partition&gt;:comprehend:&lt;region&gt;:&lt;account-id&gt;:topics-detection-job/&lt;job-id&gt;</code> </p> <p>The following is an example job ARN:</p> <p> <code>arn:aws:comprehend:us-west-2:111122223333:document-classification-job/1234abcd12ab34cd56ef1234567890ab</code> </p>',
        }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the job: </p> <ul> <li> <p>SUBMITTED - The job has been received and is queued for processing.</p> </li> <li> <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p> </li> <li> <p>COMPLETED - The job was successfully completed and the output is available.</p> </li> <li> <p>FAILED - The job did not complete. To get details, use the <code>DescribeTopicDetectionJob</code> operation.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartTopicsDetectionJobResponse')

const NumberOfTopicsIntegerSchema = z.int().min(1).max(100).openapi('NumberOfTopicsInteger')

const StartTopicsDetectionJobRequestSchema = z
  .object({
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the format and location of the input data for the job.',
        }),
    ),
    OutputDataConfig: OutputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies where to send the output files. The output is a compressed archive with two files, <code>topic-terms.csv</code> that lists the terms associated with each topic, and <code>doc-topics.csv</code> that lists the documents associated with each topic',
        }),
    ),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions">Role-based permissions</a>.',
        }),
    ),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The identifier of the job.' }),
    ).exactOptional(),
    NumberOfTopics: NumberOfTopicsIntegerSchema.and(
      z.any().openapi({ description: 'The number of topics to detect.' }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the request. If you do not set the client request token, Amazon Comprehend generates one.',
        }),
    ).exactOptional(),
    VolumeKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your topic detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. ',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags to associate with the topics detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn'],
    title: 'StartTopicsDetectionJobRequest',
  })
  .openapi('StartTopicsDetectionJobRequest')

const StopDominantLanguageDetectionJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the dominant language detection job to stop.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Either <code>STOP_REQUESTED</code> if the job is currently running, or <code>STOPPED</code> if the job was previously stopped with the <code>StopDominantLanguageDetectionJob</code> operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopDominantLanguageDetectionJobResponse')

const StopDominantLanguageDetectionJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the dominant language detection job to stop.' }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'StopDominantLanguageDetectionJobRequest' })
  .openapi('StopDominantLanguageDetectionJobRequest')

const StopEntitiesDetectionJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier of the entities detection job to stop.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Either <code>STOP_REQUESTED</code> if the job is currently running, or <code>STOPPED</code> if the job was previously stopped with the <code>StopEntitiesDetectionJob</code> operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopEntitiesDetectionJobResponse')

const StopEntitiesDetectionJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier of the entities detection job to stop.' }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'StopEntitiesDetectionJobRequest' })
  .openapi('StopEntitiesDetectionJobRequest')

const StopEventsDetectionJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier of the events detection job to stop.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z.any().openapi({ description: 'The status of the events detection job.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopEventsDetectionJobResponse')

const StopEventsDetectionJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier of the events detection job to stop.' }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'StopEventsDetectionJobRequest' })
  .openapi('StopEventsDetectionJobRequest')

const StopKeyPhrasesDetectionJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier of the key phrases detection job to stop.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Either <code>STOP_REQUESTED</code> if the job is currently running, or <code>STOPPED</code> if the job was previously stopped with the <code>StopKeyPhrasesDetectionJob</code> operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopKeyPhrasesDetectionJobResponse')

const StopKeyPhrasesDetectionJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier of the key phrases detection job to stop.' }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'StopKeyPhrasesDetectionJobRequest' })
  .openapi('StopKeyPhrasesDetectionJobRequest')

const StopPiiEntitiesDetectionJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier of the PII entities detection job to stop.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z.any().openapi({ description: 'The status of the PII entities detection job.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopPiiEntitiesDetectionJobResponse')

const StopPiiEntitiesDetectionJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier of the PII entities detection job to stop.' }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'StopPiiEntitiesDetectionJobRequest' })
  .openapi('StopPiiEntitiesDetectionJobRequest')

const StopSentimentDetectionJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier of the sentiment detection job to stop.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Either <code>STOP_REQUESTED</code> if the job is currently running, or <code>STOPPED</code> if the job was previously stopped with the <code>StopSentimentDetectionJob</code> operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopSentimentDetectionJobResponse')

const StopSentimentDetectionJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier of the sentiment detection job to stop.' }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'StopSentimentDetectionJobRequest' })
  .openapi('StopSentimentDetectionJobRequest')

const StopTargetedSentimentDetectionJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the targeted sentiment detection job to stop.',
        }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Either <code>STOP_REQUESTED</code> if the job is currently running, or <code>STOPPED</code> if the job was previously stopped with the <code>StopSentimentDetectionJob</code> operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopTargetedSentimentDetectionJobResponse')

const StopTargetedSentimentDetectionJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the targeted sentiment detection job to stop.',
        }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'StopTargetedSentimentDetectionJobRequest' })
  .openapi('StopTargetedSentimentDetectionJobRequest')

const StopTrainingDocumentClassifierResponseSchema = z
  .object({})
  .openapi('StopTrainingDocumentClassifierResponse')

const StopTrainingDocumentClassifierRequestSchema = z
  .object({
    DocumentClassifierArn: DocumentClassifierArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that identifies the document classifier currently being trained.',
        }),
    ),
  })
  .openapi({ required: ['DocumentClassifierArn'], title: 'StopTrainingDocumentClassifierRequest' })
  .openapi('StopTrainingDocumentClassifierRequest')

const StopTrainingEntityRecognizerResponseSchema = z
  .object({})
  .openapi('StopTrainingEntityRecognizerResponse')

const StopTrainingEntityRecognizerRequestSchema = z
  .object({
    EntityRecognizerArn: EntityRecognizerArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that identifies the entity recognizer currently being trained.',
        }),
    ),
  })
  .openapi({ required: ['EntityRecognizerArn'], title: 'StopTrainingEntityRecognizerRequest' })
  .openapi('StopTrainingEntityRecognizerRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: ComprehendArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the given Amazon Comprehend resource to which you want to associate the tags. ',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags being associated with a specific Amazon Comprehend resource. There can be a maximum of 50 tags (both existing and pending) associated with a specific resource. ',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceArn: ComprehendArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) of the given Amazon Comprehend resource from which you want to remove the tags. ',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The initial part of a key-value pair that forms a tag being removed from a given resource. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. Keys must be unique and cannot be duplicated for a particular resource. ',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const TooManyTagKeysExceptionSchema = z.any().openapi('TooManyTagKeysException')

const UpdateEndpointResponseSchema = z
  .object({
    DesiredModelArn: ComprehendModelArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Number (ARN) of the new model.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateEndpointResponse')

const UpdateEndpointRequestSchema = z
  .object({
    EndpointArn: ComprehendEndpointArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Number (ARN) of the endpoint being updated.',
        }),
    ),
    DesiredModelArn: ComprehendModelArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the new model to use when updating an existing endpoint.',
        }),
    ).exactOptional(),
    DesiredInferenceUnits: InferenceUnitsIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The desired number of inference units to be used by the model using this endpoint. Each inference unit represents of a throughput of 100 characters per second.',
        }),
    ).exactOptional(),
    DesiredDataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Data access role ARN to use in case the new model is encrypted with a customer CMK.',
        }),
    ).exactOptional(),
    FlywheelArn: ComprehendFlywheelArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Number (ARN) of the flywheel' }),
    ).exactOptional(),
  })
  .openapi({ required: ['EndpointArn'], title: 'UpdateEndpointRequest' })
  .openapi('UpdateEndpointRequest')

const UpdateFlywheelResponseSchema = z
  .object({
    FlywheelProperties: FlywheelPropertiesSchema.and(
      z.any().openapi({ description: 'The flywheel properties.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFlywheelResponse')

const UpdateDataSecurityConfigSchema = z
  .object({
    ModelKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    VolumeKmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description: 'ID for the KMS key that Amazon Comprehend uses to encrypt the volume.',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.exactOptional(),
  })
  .openapi({ description: 'Data security configuration.', required: [] })
  .openapi('UpdateDataSecurityConfig')

const UpdateFlywheelRequestSchema = z
  .object({
    FlywheelArn: ComprehendFlywheelArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Number (ARN) of the flywheel to update.' }),
    ),
    ActiveModelArn: ComprehendModelArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Number (ARN) of the active model version.' }),
    ).exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend permission to access the flywheel data.',
        }),
    ).exactOptional(),
    DataSecurityConfig: UpdateDataSecurityConfigSchema.and(
      z.any().openapi({ description: 'Flywheel data security configuration.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['FlywheelArn'], title: 'UpdateFlywheelRequest' })
  .openapi('UpdateFlywheelRequest')

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

export const postXAmzTargetComprehend20171127BatchDetectDominantLanguageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage',
  description:
    'Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>. ',
  operationId: 'BatchDetectDominantLanguage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.BatchDetectDominantLanguage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.BatchDetectDominantLanguage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchDetectDominantLanguageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDetectDominantLanguageResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TextSizeLimitExceededException',
      content: { 'application/json': { schema: TextSizeLimitExceededExceptionSchema } },
    },
    482: {
      description: 'BatchSizeLimitExceededException',
      content: { 'application/json': { schema: BatchSizeLimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127BatchDetectEntitiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.BatchDetectEntities',
  description:
    'Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide. ',
  operationId: 'BatchDetectEntities',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.BatchDetectEntities')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.BatchDetectEntities'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchDetectEntitiesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDetectEntitiesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TextSizeLimitExceededException',
      content: { 'application/json': { schema: TextSizeLimitExceededExceptionSchema } },
    },
    482: {
      description: 'UnsupportedLanguageException',
      content: { 'application/json': { schema: UnsupportedLanguageExceptionSchema } },
    },
    483: {
      description: 'BatchSizeLimitExceededException',
      content: { 'application/json': { schema: BatchSizeLimitExceededExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127BatchDetectKeyPhrasesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases',
  description: 'Detects the key noun phrases found in a batch of documents.',
  operationId: 'BatchDetectKeyPhrases',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.BatchDetectKeyPhrases')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.BatchDetectKeyPhrases'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchDetectKeyPhrasesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDetectKeyPhrasesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TextSizeLimitExceededException',
      content: { 'application/json': { schema: TextSizeLimitExceededExceptionSchema } },
    },
    482: {
      description: 'UnsupportedLanguageException',
      content: { 'application/json': { schema: UnsupportedLanguageExceptionSchema } },
    },
    483: {
      description: 'BatchSizeLimitExceededException',
      content: { 'application/json': { schema: BatchSizeLimitExceededExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127BatchDetectSentimentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment',
  description:
    'Inspects a batch of documents and returns an inference of the prevailing sentiment, <code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>, in each one.',
  operationId: 'BatchDetectSentiment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.BatchDetectSentiment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.BatchDetectSentiment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchDetectSentimentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDetectSentimentResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TextSizeLimitExceededException',
      content: { 'application/json': { schema: TextSizeLimitExceededExceptionSchema } },
    },
    482: {
      description: 'UnsupportedLanguageException',
      content: { 'application/json': { schema: UnsupportedLanguageExceptionSchema } },
    },
    483: {
      description: 'BatchSizeLimitExceededException',
      content: { 'application/json': { schema: BatchSizeLimitExceededExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127BatchDetectSyntaxRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax',
  description:
    'Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide. ',
  operationId: 'BatchDetectSyntax',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.BatchDetectSyntax')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.BatchDetectSyntax'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchDetectSyntaxRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDetectSyntaxResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TextSizeLimitExceededException',
      content: { 'application/json': { schema: TextSizeLimitExceededExceptionSchema } },
    },
    482: {
      description: 'UnsupportedLanguageException',
      content: { 'application/json': { schema: UnsupportedLanguageExceptionSchema } },
    },
    483: {
      description: 'BatchSizeLimitExceededException',
      content: { 'application/json': { schema: BatchSizeLimitExceededExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127BatchDetectTargetedSentimentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment',
  description:
    '<p>Inspects a batch of documents and returns a sentiment analysis for each entity identified in the documents.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>',
  operationId: 'BatchDetectTargetedSentiment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.BatchDetectTargetedSentiment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.BatchDetectTargetedSentiment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchDetectTargetedSentimentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDetectTargetedSentimentResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TextSizeLimitExceededException',
      content: { 'application/json': { schema: TextSizeLimitExceededExceptionSchema } },
    },
    482: {
      description: 'UnsupportedLanguageException',
      content: { 'application/json': { schema: UnsupportedLanguageExceptionSchema } },
    },
    483: {
      description: 'BatchSizeLimitExceededException',
      content: { 'application/json': { schema: BatchSizeLimitExceededExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127ClassifyDocumentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.ClassifyDocument',
  description:
    '<p>Creates a new document classification request to analyze a single document in real-time, using a previously created and trained custom model and an endpoint.</p> <p>You can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p> <p>If the system detects errors while processing a page in the input document, the API response includes an entry in <code>Errors</code> that describes the errors.</p> <p>If the system detects a document-level error in your input document, the API returns an <code>InvalidRequestException</code> error response. For details about this exception, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html"> Errors in semi-structured documents</a> in the Comprehend Developer Guide. </p>',
  operationId: 'ClassifyDocument',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.ClassifyDocument')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.ClassifyDocument'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ClassifyDocumentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ClassifyDocumentResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    482: {
      description: 'TextSizeLimitExceededException',
      content: { 'application/json': { schema: TextSizeLimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127ContainsPiiEntitiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities',
  description:
    'Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of identified PII entity types such as name, address, bank account number, or phone number.',
  operationId: 'ContainsPiiEntities',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.ContainsPiiEntities')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.ContainsPiiEntities'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ContainsPiiEntitiesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ContainsPiiEntitiesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TextSizeLimitExceededException',
      content: { 'application/json': { schema: TextSizeLimitExceededExceptionSchema } },
    },
    482: {
      description: 'UnsupportedLanguageException',
      content: { 'application/json': { schema: UnsupportedLanguageExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127CreateDatasetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.CreateDataset',
  description:
    'Creates a dataset to upload training or test data for a model associated with a flywheel. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.',
  operationId: 'CreateDataset',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.CreateDataset')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.CreateDataset'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDatasetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDatasetResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127CreateDocumentClassifierRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier',
  description:
    'Creates a new document classifier that you can use to categorize documents. To create a classifier, you provide a set of training documents that are labeled with the categories that you want to use. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/training-classifier-model.html">Training classifier models</a> in the Comprehend Developer Guide. ',
  operationId: 'CreateDocumentClassifier',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.CreateDocumentClassifier')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.CreateDocumentClassifier'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDocumentClassifierRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDocumentClassifierResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    485: {
      description: 'UnsupportedLanguageException',
      content: { 'application/json': { schema: UnsupportedLanguageExceptionSchema } },
    },
    486: {
      description: 'KmsKeyValidationException',
      content: { 'application/json': { schema: KmsKeyValidationExceptionSchema } },
    },
    487: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127CreateEndpointRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.CreateEndpoint',
  description:
    'Creates a model-specific endpoint for synchronous inference for a previously trained custom model For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.',
  operationId: 'CreateEndpoint',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.CreateEndpoint')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.CreateEndpoint'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateEndpointRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateEndpointResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    487: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127CreateEntityRecognizerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer',
  description:
    'Creates an entity recognizer using submitted files. After your <code>CreateEntityRecognizer</code> request is submitted, you can check job status using the <code>DescribeEntityRecognizer</code> API. ',
  operationId: 'CreateEntityRecognizer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.CreateEntityRecognizer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.CreateEntityRecognizer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateEntityRecognizerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateEntityRecognizerResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    485: {
      description: 'UnsupportedLanguageException',
      content: { 'application/json': { schema: UnsupportedLanguageExceptionSchema } },
    },
    486: {
      description: 'KmsKeyValidationException',
      content: { 'application/json': { schema: KmsKeyValidationExceptionSchema } },
    },
    487: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127CreateFlywheelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.CreateFlywheel',
  description:
    '<p>A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom classification or custom entity recognition. You can create a flywheel to start with an existing trained model, or Comprehend can create and train a new model.</p> <p>When you create the flywheel, Comprehend creates a data lake in your account. The data lake holds the training data and test data for all versions of the model.</p> <p>To use a flywheel with an existing trained model, you specify the active model version. Comprehend copies the model\'s training data and test data into the flywheel\'s data lake.</p> <p>To use the flywheel with a new model, you need to provide a dataset for training data (and optional test data) when you create the flywheel.</p> <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>',
  operationId: 'CreateFlywheel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.CreateFlywheel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.CreateFlywheel'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateFlywheelRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFlywheelResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    485: {
      description: 'UnsupportedLanguageException',
      content: { 'application/json': { schema: UnsupportedLanguageExceptionSchema } },
    },
    486: {
      description: 'KmsKeyValidationException',
      content: { 'application/json': { schema: KmsKeyValidationExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    489: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DeleteDocumentClassifierRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier',
  description:
    '<p>Deletes a previously created document classifier</p> <p>Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use. </p>',
  operationId: 'DeleteDocumentClassifier',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DeleteDocumentClassifier')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DeleteDocumentClassifier'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDocumentClassifierRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDocumentClassifierResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DeleteEndpointRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DeleteEndpoint',
  description:
    'Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.',
  operationId: 'DeleteEndpoint',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DeleteEndpoint')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DeleteEndpoint'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteEndpointRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEndpointResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DeleteEntityRecognizerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer',
  description:
    '<p>Deletes an entity recognizer.</p> <p>Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use. </p>',
  operationId: 'DeleteEntityRecognizer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DeleteEntityRecognizer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DeleteEntityRecognizer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteEntityRecognizerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEntityRecognizerResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DeleteFlywheelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DeleteFlywheel',
  description:
    '<p>Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data lake or the model associated with the flywheel.</p> <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>',
  operationId: 'DeleteFlywheel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DeleteFlywheel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DeleteFlywheel'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteFlywheelRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFlywheelResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DeleteResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy',
  description: 'Deletes a resource-based policy that is attached to a custom model.',
  operationId: 'DeleteResourcePolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DeleteResourcePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DeleteResourcePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteResourcePolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteResourcePolicyResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DescribeDatasetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DescribeDataset',
  description:
    'Returns information about the dataset that you specify. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.',
  operationId: 'DescribeDataset',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DescribeDataset')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DescribeDataset'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeDatasetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDatasetResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DescribeDocumentClassificationJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob',
  description:
    'Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.',
  operationId: 'DescribeDocumentClassificationJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DescribeDocumentClassificationJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Comprehend_20171127.DescribeDocumentClassificationJob'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeDocumentClassificationJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDocumentClassificationJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'JobNotFoundException',
      content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DescribeDocumentClassifierRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier',
  description: 'Gets the properties associated with a document classifier.',
  operationId: 'DescribeDocumentClassifier',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DescribeDocumentClassifier')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DescribeDocumentClassifier'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeDocumentClassifierRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDocumentClassifierResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DescribeDominantLanguageDetectionJobRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob',
    description:
      'Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.',
    operationId: 'DescribeDominantLanguageDetectionJob',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('Comprehend_20171127.DescribeDominantLanguageDetectionJob')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['Comprehend_20171127.DescribeDominantLanguageDetectionJob'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeDominantLanguageDetectionJobRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeDominantLanguageDetectionJobResponseSchema },
        },
      },
      480: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      481: {
        description: 'JobNotFoundException',
        content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
      },
      482: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComprehend20171127DescribeEndpointRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DescribeEndpoint',
  description:
    'Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.',
  operationId: 'DescribeEndpoint',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DescribeEndpoint')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DescribeEndpoint'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEndpointRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEndpointResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DescribeEntitiesDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob',
  description:
    'Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.',
  operationId: 'DescribeEntitiesDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DescribeEntitiesDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DescribeEntitiesDetectionJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEntitiesDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEntitiesDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'JobNotFoundException',
      content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DescribeEntityRecognizerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer',
  description:
    'Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.',
  operationId: 'DescribeEntityRecognizer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DescribeEntityRecognizer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DescribeEntityRecognizer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEntityRecognizerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEntityRecognizerResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DescribeEventsDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob',
  description: 'Gets the status and details of an events detection job.',
  operationId: 'DescribeEventsDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DescribeEventsDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DescribeEventsDetectionJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEventsDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEventsDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'JobNotFoundException',
      content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DescribeFlywheelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DescribeFlywheel',
  description:
    'Provides configuration information about the flywheel. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.',
  operationId: 'DescribeFlywheel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DescribeFlywheel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DescribeFlywheel'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeFlywheelRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFlywheelResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DescribeFlywheelIterationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration',
  description:
    'Retrieve the configuration properties of a flywheel iteration. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.',
  operationId: 'DescribeFlywheelIteration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DescribeFlywheelIteration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DescribeFlywheelIteration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeFlywheelIterationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFlywheelIterationResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DescribeKeyPhrasesDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob',
  description:
    'Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.',
  operationId: 'DescribeKeyPhrasesDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DescribeKeyPhrasesDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Comprehend_20171127.DescribeKeyPhrasesDetectionJob'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeKeyPhrasesDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeKeyPhrasesDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'JobNotFoundException',
      content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DescribePiiEntitiesDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob',
  description:
    'Gets the properties associated with a PII entities detection job. For example, you can use this operation to get the job status.',
  operationId: 'DescribePiiEntitiesDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DescribePiiEntitiesDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Comprehend_20171127.DescribePiiEntitiesDetectionJob'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribePiiEntitiesDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePiiEntitiesDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'JobNotFoundException',
      content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DescribeResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy',
  description:
    'Gets the details of a resource-based policy that is attached to a custom model, including the JSON body of the policy.',
  operationId: 'DescribeResourcePolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DescribeResourcePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DescribeResourcePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeResourcePolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeResourcePolicyResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DescribeSentimentDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob',
  description:
    'Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.',
  operationId: 'DescribeSentimentDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DescribeSentimentDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DescribeSentimentDetectionJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeSentimentDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSentimentDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'JobNotFoundException',
      content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DescribeTargetedSentimentDetectionJobRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob',
    description:
      'Gets the properties associated with a targeted sentiment detection job. Use this operation to get the status of the job.',
    operationId: 'DescribeTargetedSentimentDetectionJob',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('Comprehend_20171127.DescribeTargetedSentimentDetectionJob')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['Comprehend_20171127.DescribeTargetedSentimentDetectionJob'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeTargetedSentimentDetectionJobRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeTargetedSentimentDetectionJobResponseSchema },
        },
      },
      480: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      481: {
        description: 'JobNotFoundException',
        content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
      },
      482: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComprehend20171127DescribeTopicsDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob',
  description:
    'Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.',
  operationId: 'DescribeTopicsDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DescribeTopicsDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DescribeTopicsDetectionJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeTopicsDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTopicsDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'JobNotFoundException',
      content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DetectDominantLanguageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage',
  description:
    'Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>. ',
  operationId: 'DetectDominantLanguage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DetectDominantLanguage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DetectDominantLanguage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DetectDominantLanguageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetectDominantLanguageResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TextSizeLimitExceededException',
      content: { 'application/json': { schema: TextSizeLimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DetectEntitiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DetectEntities',
  description:
    '<p>Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have a custom entity recognition model. </p> <p> When detecting named entities using the pre-trained model, use plain text as the input. For more information about named entities, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide.</p> <p>When you use a custom entity recognition model, you can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p> <p>If the system detects errors while processing a page in the input document, the API response includes an entry in <code>Errors</code> for each error. </p> <p>If the system detects a document-level error in your input document, the API returns an <code>InvalidRequestException</code> error response. For details about this exception, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html"> Errors in semi-structured documents</a> in the Comprehend Developer Guide. </p>',
  operationId: 'DetectEntities',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DetectEntities')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DetectEntities'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DetectEntitiesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetectEntitiesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    482: {
      description: 'TextSizeLimitExceededException',
      content: { 'application/json': { schema: TextSizeLimitExceededExceptionSchema } },
    },
    483: {
      description: 'UnsupportedLanguageException',
      content: { 'application/json': { schema: UnsupportedLanguageExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DetectKeyPhrasesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases',
  description: 'Detects the key noun phrases found in the text. ',
  operationId: 'DetectKeyPhrases',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DetectKeyPhrases')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DetectKeyPhrases'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DetectKeyPhrasesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetectKeyPhrasesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TextSizeLimitExceededException',
      content: { 'application/json': { schema: TextSizeLimitExceededExceptionSchema } },
    },
    482: {
      description: 'UnsupportedLanguageException',
      content: { 'application/json': { schema: UnsupportedLanguageExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DetectPiiEntitiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DetectPiiEntities',
  description:
    'Inspects the input text for entities that contain personally identifiable information (PII) and returns information about them.',
  operationId: 'DetectPiiEntities',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DetectPiiEntities')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DetectPiiEntities'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DetectPiiEntitiesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetectPiiEntitiesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TextSizeLimitExceededException',
      content: { 'application/json': { schema: TextSizeLimitExceededExceptionSchema } },
    },
    482: {
      description: 'UnsupportedLanguageException',
      content: { 'application/json': { schema: UnsupportedLanguageExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DetectSentimentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DetectSentiment',
  description:
    'Inspects text and returns an inference of the prevailing sentiment (<code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>). ',
  operationId: 'DetectSentiment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DetectSentiment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DetectSentiment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DetectSentimentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetectSentimentResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TextSizeLimitExceededException',
      content: { 'application/json': { schema: TextSizeLimitExceededExceptionSchema } },
    },
    482: {
      description: 'UnsupportedLanguageException',
      content: { 'application/json': { schema: UnsupportedLanguageExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DetectSyntaxRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DetectSyntax',
  description:
    'Inspects text for syntax and the part of speech of words in the document. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide. ',
  operationId: 'DetectSyntax',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DetectSyntax')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DetectSyntax'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DetectSyntaxRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetectSyntaxResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TextSizeLimitExceededException',
      content: { 'application/json': { schema: TextSizeLimitExceededExceptionSchema } },
    },
    482: {
      description: 'UnsupportedLanguageException',
      content: { 'application/json': { schema: UnsupportedLanguageExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127DetectTargetedSentimentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment',
  description:
    '<p>Inspects the input text and returns a sentiment analysis for each entity identified in the text.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>',
  operationId: 'DetectTargetedSentiment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.DetectTargetedSentiment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.DetectTargetedSentiment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DetectTargetedSentimentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetectTargetedSentimentResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TextSizeLimitExceededException',
      content: { 'application/json': { schema: TextSizeLimitExceededExceptionSchema } },
    },
    482: {
      description: 'UnsupportedLanguageException',
      content: { 'application/json': { schema: UnsupportedLanguageExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127ImportModelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.ImportModel',
  description:
    "<p>Creates a new custom model that replicates a source custom model that you import. The source model can be in your Amazon Web Services account or another one.</p> <p>If the source model is in another Amazon Web Services account, then it must have a resource-based policy that authorizes you to import it.</p> <p>The source model must be in the same Amazon Web Services Region that you're using when you import. You can't import a model that's in a different Region.</p>",
  operationId: 'ImportModel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.ImportModel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.ImportModel'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ImportModelRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportModelResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    484: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    487: {
      description: 'KmsKeyValidationException',
      content: { 'application/json': { schema: KmsKeyValidationExceptionSchema } },
    },
    488: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127ListDatasetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.ListDatasets',
  description:
    'List the datasets that you have configured in this Region. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.',
  operationId: 'ListDatasets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.ListDatasets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.ListDatasets'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListDatasetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDatasetsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InvalidFilterException',
      content: { 'application/json': { schema: InvalidFilterExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127ListDocumentClassificationJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs',
  description: 'Gets a list of the documentation classification jobs that you have submitted.',
  operationId: 'ListDocumentClassificationJobs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.ListDocumentClassificationJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Comprehend_20171127.ListDocumentClassificationJobs'],
            },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListDocumentClassificationJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDocumentClassificationJobsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InvalidFilterException',
      content: { 'application/json': { schema: InvalidFilterExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127ListDocumentClassifierSummariesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries',
  description: 'Gets a list of summaries of the document classifiers that you have created',
  operationId: 'ListDocumentClassifierSummaries',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.ListDocumentClassifierSummaries')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Comprehend_20171127.ListDocumentClassifierSummaries'],
            },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListDocumentClassifierSummariesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDocumentClassifierSummariesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127ListDocumentClassifiersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers',
  description: 'Gets a list of the document classifiers that you have created.',
  operationId: 'ListDocumentClassifiers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.ListDocumentClassifiers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.ListDocumentClassifiers'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListDocumentClassifiersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDocumentClassifiersResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InvalidFilterException',
      content: { 'application/json': { schema: InvalidFilterExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127ListDominantLanguageDetectionJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs',
  description: 'Gets a list of the dominant language detection jobs that you have submitted.',
  operationId: 'ListDominantLanguageDetectionJobs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.ListDominantLanguageDetectionJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Comprehend_20171127.ListDominantLanguageDetectionJobs'],
            },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListDominantLanguageDetectionJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDominantLanguageDetectionJobsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InvalidFilterException',
      content: { 'application/json': { schema: InvalidFilterExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127ListEndpointsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.ListEndpoints',
  description:
    'Gets a list of all existing endpoints that you\'ve created. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.',
  operationId: 'ListEndpoints',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.ListEndpoints')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.ListEndpoints'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListEndpointsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEndpointsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127ListEntitiesDetectionJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs',
  description: 'Gets a list of the entity detection jobs that you have submitted.',
  operationId: 'ListEntitiesDetectionJobs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.ListEntitiesDetectionJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.ListEntitiesDetectionJobs'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListEntitiesDetectionJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEntitiesDetectionJobsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InvalidFilterException',
      content: { 'application/json': { schema: InvalidFilterExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127ListEntityRecognizerSummariesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries',
  description: 'Gets a list of summaries for the entity recognizers that you have created.',
  operationId: 'ListEntityRecognizerSummaries',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.ListEntityRecognizerSummaries')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.ListEntityRecognizerSummaries'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListEntityRecognizerSummariesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEntityRecognizerSummariesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127ListEntityRecognizersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers',
  description:
    '<p>Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list.</p> <p>The results of this list are not in any particular order. Please get the list and sort locally if needed.</p>',
  operationId: 'ListEntityRecognizers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.ListEntityRecognizers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.ListEntityRecognizers'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListEntityRecognizersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEntityRecognizersResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InvalidFilterException',
      content: { 'application/json': { schema: InvalidFilterExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127ListEventsDetectionJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs',
  description: 'Gets a list of the events detection jobs that you have submitted.',
  operationId: 'ListEventsDetectionJobs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.ListEventsDetectionJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.ListEventsDetectionJobs'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListEventsDetectionJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEventsDetectionJobsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InvalidFilterException',
      content: { 'application/json': { schema: InvalidFilterExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127ListFlywheelIterationHistoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory',
  description:
    'Information about the history of a flywheel iteration. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.',
  operationId: 'ListFlywheelIterationHistory',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.ListFlywheelIterationHistory')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.ListFlywheelIterationHistory'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListFlywheelIterationHistoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFlywheelIterationHistoryResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InvalidFilterException',
      content: { 'application/json': { schema: InvalidFilterExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127ListFlywheelsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.ListFlywheels',
  description: 'Gets a list of the flywheels that you have created.',
  operationId: 'ListFlywheels',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.ListFlywheels')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.ListFlywheels'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListFlywheelsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFlywheelsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InvalidFilterException',
      content: { 'application/json': { schema: InvalidFilterExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127ListKeyPhrasesDetectionJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs',
  description: 'Get a list of key phrase detection jobs that you have submitted.',
  operationId: 'ListKeyPhrasesDetectionJobs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.ListKeyPhrasesDetectionJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.ListKeyPhrasesDetectionJobs'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListKeyPhrasesDetectionJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListKeyPhrasesDetectionJobsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InvalidFilterException',
      content: { 'application/json': { schema: InvalidFilterExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127ListPiiEntitiesDetectionJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs',
  description: 'Gets a list of the PII entity detection jobs that you have submitted.',
  operationId: 'ListPiiEntitiesDetectionJobs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.ListPiiEntitiesDetectionJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.ListPiiEntitiesDetectionJobs'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListPiiEntitiesDetectionJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPiiEntitiesDetectionJobsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InvalidFilterException',
      content: { 'application/json': { schema: InvalidFilterExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127ListSentimentDetectionJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs',
  description: 'Gets a list of sentiment detection jobs that you have submitted.',
  operationId: 'ListSentimentDetectionJobs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.ListSentimentDetectionJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.ListSentimentDetectionJobs'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListSentimentDetectionJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSentimentDetectionJobsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InvalidFilterException',
      content: { 'application/json': { schema: InvalidFilterExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.ListTagsForResource',
  description: 'Lists all tags associated with a given Amazon Comprehend resource. ',
  operationId: 'ListTagsForResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.ListTagsForResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127ListTargetedSentimentDetectionJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs',
  description: 'Gets a list of targeted sentiment detection jobs that you have submitted.',
  operationId: 'ListTargetedSentimentDetectionJobs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.ListTargetedSentimentDetectionJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Comprehend_20171127.ListTargetedSentimentDetectionJobs'],
            },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTargetedSentimentDetectionJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTargetedSentimentDetectionJobsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InvalidFilterException',
      content: { 'application/json': { schema: InvalidFilterExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127ListTopicsDetectionJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs',
  description: 'Gets a list of the topic detection jobs that you have submitted.',
  operationId: 'ListTopicsDetectionJobs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.ListTopicsDetectionJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.ListTopicsDetectionJobs'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTopicsDetectionJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTopicsDetectionJobsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InvalidFilterException',
      content: { 'application/json': { schema: InvalidFilterExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127PutResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.PutResourcePolicy',
  description:
    'Attaches a resource-based policy to a custom model. You can use this policy to authorize an entity in another Amazon Web Services account to import the custom model, which replicates it in Amazon Comprehend in their account.',
  operationId: 'PutResourcePolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.PutResourcePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.PutResourcePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutResourcePolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutResourcePolicyResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127StartDocumentClassificationJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob',
  description:
    'Starts an asynchronous document classification job. Use the <code>DescribeDocumentClassificationJob</code> operation to track the progress of the job.',
  operationId: 'StartDocumentClassificationJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.StartDocumentClassificationJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Comprehend_20171127.StartDocumentClassificationJob'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartDocumentClassificationJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartDocumentClassificationJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    484: {
      description: 'KmsKeyValidationException',
      content: { 'application/json': { schema: KmsKeyValidationExceptionSchema } },
    },
    485: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    486: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    487: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127StartDominantLanguageDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob',
  description:
    'Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.',
  operationId: 'StartDominantLanguageDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.StartDominantLanguageDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Comprehend_20171127.StartDominantLanguageDetectionJob'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartDominantLanguageDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartDominantLanguageDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'KmsKeyValidationException',
      content: { 'application/json': { schema: KmsKeyValidationExceptionSchema } },
    },
    483: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127StartEntitiesDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob',
  description:
    '<p>Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job.</p> <p>This API can be used for either standard entity detection or custom entity recognition. In order to be used for custom entity recognition, the optional <code>EntityRecognizerArn</code> must be used in order to provide access to the recognizer being used to detect the custom entity.</p>',
  operationId: 'StartEntitiesDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.StartEntitiesDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.StartEntitiesDetectionJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartEntitiesDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartEntitiesDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    484: {
      description: 'KmsKeyValidationException',
      content: { 'application/json': { schema: KmsKeyValidationExceptionSchema } },
    },
    485: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    486: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    487: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127StartEventsDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob',
  description: 'Starts an asynchronous event detection job for a collection of documents.',
  operationId: 'StartEventsDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.StartEventsDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.StartEventsDetectionJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartEventsDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartEventsDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'KmsKeyValidationException',
      content: { 'application/json': { schema: KmsKeyValidationExceptionSchema } },
    },
    483: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127StartFlywheelIterationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration',
  description:
    'Start the flywheel iteration.This operation uses any new datasets to train a new model version. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.',
  operationId: 'StartFlywheelIteration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.StartFlywheelIteration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.StartFlywheelIteration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartFlywheelIterationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartFlywheelIterationResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127StartKeyPhrasesDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob',
  description:
    'Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.',
  operationId: 'StartKeyPhrasesDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.StartKeyPhrasesDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.StartKeyPhrasesDetectionJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartKeyPhrasesDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartKeyPhrasesDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'KmsKeyValidationException',
      content: { 'application/json': { schema: KmsKeyValidationExceptionSchema } },
    },
    483: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127StartPiiEntitiesDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob',
  description: 'Starts an asynchronous PII entity detection job for a collection of documents.',
  operationId: 'StartPiiEntitiesDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.StartPiiEntitiesDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.StartPiiEntitiesDetectionJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartPiiEntitiesDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartPiiEntitiesDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'KmsKeyValidationException',
      content: { 'application/json': { schema: KmsKeyValidationExceptionSchema } },
    },
    483: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127StartSentimentDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob',
  description:
    'Starts an asynchronous sentiment detection job for a collection of documents. Use the operation to track the status of a job.',
  operationId: 'StartSentimentDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.StartSentimentDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.StartSentimentDetectionJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartSentimentDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartSentimentDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'KmsKeyValidationException',
      content: { 'application/json': { schema: KmsKeyValidationExceptionSchema } },
    },
    483: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127StartTargetedSentimentDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob',
  description:
    'Starts an asynchronous targeted sentiment detection job for a collection of documents. Use the <code>DescribeTargetedSentimentDetectionJob</code> operation to track the status of a job.',
  operationId: 'StartTargetedSentimentDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.StartTargetedSentimentDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Comprehend_20171127.StartTargetedSentimentDetectionJob'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartTargetedSentimentDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartTargetedSentimentDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'KmsKeyValidationException',
      content: { 'application/json': { schema: KmsKeyValidationExceptionSchema } },
    },
    483: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127StartTopicsDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob',
  description:
    'Starts an asynchronous topic detection job. Use the <code>DescribeTopicDetectionJob</code> operation to track the status of a job.',
  operationId: 'StartTopicsDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.StartTopicsDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.StartTopicsDetectionJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartTopicsDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartTopicsDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'KmsKeyValidationException',
      content: { 'application/json': { schema: KmsKeyValidationExceptionSchema } },
    },
    483: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127StopDominantLanguageDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob',
  description:
    '<p>Stops a dominant language detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>',
  operationId: 'StopDominantLanguageDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.StopDominantLanguageDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Comprehend_20171127.StopDominantLanguageDetectionJob'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopDominantLanguageDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopDominantLanguageDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'JobNotFoundException',
      content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127StopEntitiesDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob',
  description:
    '<p>Stops an entities detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>',
  operationId: 'StopEntitiesDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.StopEntitiesDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.StopEntitiesDetectionJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopEntitiesDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopEntitiesDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'JobNotFoundException',
      content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127StopEventsDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob',
  description: 'Stops an events detection job in progress.',
  operationId: 'StopEventsDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.StopEventsDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.StopEventsDetectionJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopEventsDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopEventsDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'JobNotFoundException',
      content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127StopKeyPhrasesDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob',
  description:
    '<p>Stops a key phrases detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>',
  operationId: 'StopKeyPhrasesDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.StopKeyPhrasesDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.StopKeyPhrasesDetectionJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopKeyPhrasesDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopKeyPhrasesDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'JobNotFoundException',
      content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127StopPiiEntitiesDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob',
  description: 'Stops a PII entities detection job in progress.',
  operationId: 'StopPiiEntitiesDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.StopPiiEntitiesDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.StopPiiEntitiesDetectionJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopPiiEntitiesDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopPiiEntitiesDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'JobNotFoundException',
      content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127StopSentimentDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob',
  description:
    '<p>Stops a sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>',
  operationId: 'StopSentimentDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.StopSentimentDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.StopSentimentDetectionJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopSentimentDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopSentimentDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'JobNotFoundException',
      content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127StopTargetedSentimentDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob',
  description:
    '<p>Stops a targeted sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>',
  operationId: 'StopTargetedSentimentDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.StopTargetedSentimentDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Comprehend_20171127.StopTargetedSentimentDetectionJob'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopTargetedSentimentDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopTargetedSentimentDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'JobNotFoundException',
      content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127StopTrainingDocumentClassifierRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier',
  description:
    '<p>Stops a document classifier training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and put into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body. </p>',
  operationId: 'StopTrainingDocumentClassifier',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.StopTrainingDocumentClassifier')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Comprehend_20171127.StopTrainingDocumentClassifier'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopTrainingDocumentClassifierRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopTrainingDocumentClassifierResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127StopTrainingEntityRecognizerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer',
  description:
    '<p>Stops an entity recognizer training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and putted into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body.</p>',
  operationId: 'StopTrainingEntityRecognizer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.StopTrainingEntityRecognizer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.StopTrainingEntityRecognizer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopTrainingEntityRecognizerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopTrainingEntityRecognizerResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.TagResource',
  description:
    'Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. ',
  operationId: 'TagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.UntagResource',
  description: 'Removes a specific tag associated with an Amazon Comprehend resource. ',
  operationId: 'UntagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.UntagResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'TooManyTagKeysException',
      content: { 'application/json': { schema: TooManyTagKeysExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127UpdateEndpointRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.UpdateEndpoint',
  description:
    'Updates information about the specified endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.',
  operationId: 'UpdateEndpoint',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.UpdateEndpoint')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.UpdateEndpoint'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateEndpointRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateEndpointResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehend20171127UpdateFlywheelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Comprehend_20171127.UpdateFlywheel',
  description: 'Update the configuration information for an existing flywheel.',
  operationId: 'UpdateFlywheel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Comprehend_20171127.UpdateFlywheel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Comprehend_20171127.UpdateFlywheel'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateFlywheelRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFlywheelResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'KmsKeyValidationException',
      content: { 'application/json': { schema: KmsKeyValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})
