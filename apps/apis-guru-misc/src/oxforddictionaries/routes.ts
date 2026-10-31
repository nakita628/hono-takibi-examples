import { createRoute, z } from '@hono/zod-openapi'

const GrammaticalFeaturesListSchema = z
  .array(
    z.strictObject({ text: z.string(), type: z.string() }).openapi({ required: ['text', 'type'] }),
  )
  .min(1)
  .openapi({
    description:
      "The different forms are correlated with meanings or functions which we text as 'features'",
  })
  .openapi('GrammaticalFeaturesList')

const InflectionsListSchema = z
  .array(
    z
      .strictObject({
        id: z.string().openapi({ description: 'The identifier of the word' }),
        text: z.string(),
      })
      .openapi({ required: ['text', 'id'] }),
  )
  .min(1)
  .openapi({
    description:
      'A grouping of the modifications of a word to express different grammatical categories',
  })
  .openapi('InflectionsList')

const LemmatronLexicalEntrySchema = z
  .strictObject({
    grammaticalFeatures: GrammaticalFeaturesListSchema.exactOptional(),
    inflectionOf: InflectionsListSchema,
    language: z.string().openapi({ description: 'IANA language code' }),
    lexicalCategory: z
      .string()
      .openapi({
        description:
          'A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb',
      }),
    text: z
      .string()
      .openapi({ description: 'A given written or spoken realisation of a an entry.' }),
  })
  .openapi({
    description: 'Description of an entry for a particular part of speech and grammatical features',
    required: ['inflectionOf', 'language', 'lexicalCategory', 'text'],
  })
  .openapi('LemmatronLexicalEntry')

const HeadwordLemmatronSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'The identifier of a word' }),
    language: z.string().openapi({ description: 'IANA language code' }),
    lexicalEntries: z
      .array(LemmatronLexicalEntrySchema)
      .min(1)
      .openapi({
        description:
          'A grouping of various senses in a specific language, and a lexical category that relates to a word',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: "The json object type. Could be 'headword', 'inflection' or 'phrase'",
      }),
    word: z
      .string()
      .openapi({ description: 'A given written or spoken realisation of a an entry, lowercased.' }),
  })
  .openapi({
    description: 'Description of an inflected form of a word',
    required: ['id', 'language', 'lexicalEntries', 'word'],
  })
  .openapi('HeadwordLemmatron')

type LemmatronType = {
  metadata?: { [key: string]: unknown }
  results?: z.infer<typeof HeadwordLemmatronSchema>[]
}

const ArrayofstringsSchema = z.array(z.string()).openapi('Arrayofstrings')

const CrossReferencesListSchema = z
  .array(
    z
      .strictObject({
        id: z.string().openapi({ description: 'The word id of cooccurrence' }),
        text: z.string().openapi({ description: 'The word of cooccurrence' }),
        type: z
          .string()
          .openapi({
            description:
              "The type of relation between the two words. Possible values are 'close match', 'related', 'see also', 'variant spelling', and 'abbreviation' in case of crossreferences, or 'pre', 'post' in case of collocates.",
          }),
      })
      .openapi({ description: 'cross references of a sense', required: ['id', 'text', 'type'] }),
  )
  .min(1)
  .openapi({
    description:
      'A reference to another word that is closely related, might provide additional information about the subject, has a variant spelling or is an abbreviated form of it.',
  })
  .openapi('CrossReferencesList')

const CategorizedTextListSchema = z
  .array(
    z
      .strictObject({
        id: z.string().exactOptional().openapi({ description: 'The identifier of the word' }),
        text: z.string().openapi({ description: 'A note text' }),
        type: z.string().openapi({ description: 'The descriptive category of the text' }),
      })
      .openapi({ required: ['text', 'type'] }),
  )
  .min(1)
  .openapi({ description: 'various types of notes that appear' })
  .openapi('CategorizedTextList')

const TranslationsListSchema = z
  .array(
    z
      .strictObject({
        domains: ArrayofstringsSchema.exactOptional(),
        grammaticalFeatures: GrammaticalFeaturesListSchema.exactOptional(),
        language: z
          .string()
          .openapi({
            description: 'IANA language code specifying the language of the translation',
          }),
        notes: CategorizedTextListSchema.exactOptional(),
        regions: ArrayofstringsSchema.exactOptional(),
        registers: ArrayofstringsSchema.exactOptional(),
        text: z.string(),
      })
      .openapi({ required: ['text', 'language'] }),
  )
  .min(1)
  .openapi({
    description:
      'A list of written or spoken rendering of the meaning of a word or text in another language(s)',
  })
  .openapi('TranslationsList')

const ExamplesListSchema = z
  .array(
    z
      .strictObject({
        definitions: ArrayofstringsSchema.exactOptional(),
        domains: ArrayofstringsSchema.exactOptional(),
        notes: CategorizedTextListSchema.exactOptional(),
        regions: ArrayofstringsSchema.exactOptional(),
        registers: ArrayofstringsSchema.exactOptional(),
        senseIds: ArrayofstringsSchema.exactOptional(),
        text: z.string(),
        translations: TranslationsListSchema.exactOptional(),
      })
      .openapi({ required: ['text'] }),
  )
  .min(1)
  .openapi({
    description: 'A list of written or spoken rendering of examples of use of a word or text',
  })
  .openapi('ExamplesList')

const PronunciationsListSchema = z
  .array(
    z
      .strictObject({
        audioFile: z.string().exactOptional().openapi({ description: 'The URL of the sound file' }),
        dialects: ArrayofstringsSchema.exactOptional(),
        phoneticNotation: z
          .string()
          .exactOptional()
          .openapi({ description: 'The alphabetic system used to display the phonetic spelling' }),
        phoneticSpelling: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Phonetic spelling is the representation of vocal sounds which express pronunciations of words. It is a system of spelling in which each letter represents invariably the same spoken sound',
          }),
        regions: ArrayofstringsSchema.exactOptional(),
      })
      .refine((val) => Object.keys(val).length >= 1)
      .openapi({ description: 'A grouping of pronunciation information', required: [] }),
  )
  .min(1)
  .openapi({ description: 'A list of possible pronunciations of a word' })
  .openapi('PronunciationsList')

const ThesaurusLinkSchema = z
  .object({
    entry_id: z.string().openapi({ description: 'identifier of a word' }),
    sense_id: z.string().openapi({ description: 'identifier of a sense' }),
  })
  .openapi({
    description: 'Link to a sense of a specific entry in the thesaurus Dictionary',
    required: ['entry_id', 'sense_id'],
  })
  .openapi('ThesaurusLink')

const VariantFormsListSchema = z
  .array(
    z
      .strictObject({ regions: ArrayofstringsSchema.exactOptional(), text: z.string() })
      .openapi({ required: ['text'] }),
  )
  .min(1)
  .openapi({
    description:
      "Various words that are used interchangeably depending on the context, e.g 'aluminium' and 'aluminum'",
  })
  .openapi('VariantFormsList')

type SenseType = {
  crossReferenceMarkers?: z.infer<typeof ArrayofstringsSchema>
  crossReferences?: z.infer<typeof CrossReferencesListSchema>
  definitions?: z.infer<typeof ArrayofstringsSchema>
  domains?: z.infer<typeof ArrayofstringsSchema>
  examples?: z.infer<typeof ExamplesListSchema>
  id?: string
  notes?: z.infer<typeof CategorizedTextListSchema>
  pronunciations?: z.infer<typeof PronunciationsListSchema>
  regions?: z.infer<typeof ArrayofstringsSchema>
  registers?: z.infer<typeof ArrayofstringsSchema>
  short_definitions?: z.infer<typeof ArrayofstringsSchema>
  subsenses?: SenseType[]
  thesaurusLinks?: z.infer<typeof ThesaurusLinkSchema>[]
  translations?: z.infer<typeof TranslationsListSchema>
  variantForms?: z.infer<typeof VariantFormsListSchema>
}

const ThesaurusSenseSchema: z.ZodType<ThesaurusSenseType> = z
  .lazy(() =>
    z
      .strictObject({
        antonyms: SynonymsAntonymsSchema.exactOptional(),
        domains: ArrayofstringsSchema.exactOptional(),
        examples: ExamplesListSchema.exactOptional(),
        id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The id of the sense that is required for the delete procedure',
          }),
        regions: ArrayofstringsSchema.exactOptional(),
        registers: ArrayofstringsSchema.exactOptional(),
        subsenses: z
          .array(ThesaurusSenseSchema)
          .min(1)
          .exactOptional()
          .openapi({ description: 'subsenses of word' }),
        synonyms: SynonymsAntonymsSchema.exactOptional(),
      })
      .refine((val) => Object.keys(val).length >= 1)
      .openapi({
        description:
          'A lexical sense represents the lexical meaning of a lexical entry when interpreted as referring to the corresponding ontology element',
        required: [],
      }),
  )
  .openapi('ThesaurusSense')

const ThesaurusEntrySchema = z
  .strictObject({
    homographNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies the homograph grouping. The last two digits identify different entries of the same homograph. The first one/two digits identify the homograph number.',
      }),
    senses: z
      .array(ThesaurusSenseSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'Complete list of senses' }),
    variantForms: VariantFormsListSchema.exactOptional(),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ required: [] })
  .openapi('ThesaurusEntry')

const ThesaurusLexicalEntrySchema = z
  .strictObject({
    entries: z.array(ThesaurusEntrySchema).min(1).exactOptional(),
    language: z.string().openapi({ description: 'IANA language code' }),
    lexicalCategory: z
      .string()
      .openapi({
        description:
          'A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb',
      }),
    text: z
      .string()
      .openapi({ description: 'A given written or spoken realisation of a an entry.' }),
    variantForms: VariantFormsListSchema.exactOptional(),
  })
  .openapi({
    description: 'Description of an entry for a particular part of speech',
    required: ['language', 'lexicalCategory', 'text'],
  })
  .openapi('ThesaurusLexicalEntry')

const HeadwordThesaurusSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'The identifier of a word' }),
    language: z.string().openapi({ description: 'IANA language code' }),
    lexicalEntries: z
      .array(ThesaurusLexicalEntrySchema)
      .min(1)
      .openapi({
        description:
          'A grouping of various senses in a specific language, and a lexical category that relates to a word',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: "The json object type. Could be 'headword', 'inflection' or 'phrase'",
      }),
    word: z
      .string()
      .openapi({ description: 'A given written or spoken realisation of a an entry, lowercased.' }),
  })
  .openapi({
    description: 'description of thesaurus information of a word',
    required: ['word', 'id', 'language', 'lexicalEntries'],
  })
  .openapi('HeadwordThesaurus')

type ThesaurusType = {
  metadata?: { [key: string]: unknown }
  results?: z.infer<typeof HeadwordThesaurusSchema>[]
}

const SynonymsAntonymsSchema = z
  .array(
    z
      .strictObject({
        domains: ArrayofstringsSchema.exactOptional(),
        id: z.string(),
        language: z.string().exactOptional(),
        regions: ArrayofstringsSchema.exactOptional(),
        registers: ArrayofstringsSchema.exactOptional(),
        text: z.string(),
      })
      .openapi({ required: ['id', 'text'] }),
  )
  .min(1)
  .openapi('SynonymsAntonyms')

type ThesaurusSenseType = {
  antonyms?: z.infer<typeof SynonymsAntonymsSchema>
  domains?: z.infer<typeof ArrayofstringsSchema>
  examples?: z.infer<typeof ExamplesListSchema>
  id?: string
  regions?: z.infer<typeof ArrayofstringsSchema>
  registers?: z.infer<typeof ArrayofstringsSchema>
  subsenses?: ThesaurusSenseType[]
  synonyms?: z.infer<typeof SynonymsAntonymsSchema>
}

const ArrayOfRelatedEntriesSchema = z
  .array(
    z
      .strictObject({
        domains: ArrayofstringsSchema.exactOptional(),
        id: z.string().openapi({ description: 'The identifier of the word' }),
        language: z
          .string()
          .exactOptional()
          .openapi({ description: 'IANA language code specifying the language of the word' }),
        regions: ArrayofstringsSchema.exactOptional(),
        registers: ArrayofstringsSchema.exactOptional(),
        text: z.string(),
      })
      .openapi({ required: ['text', 'id'] }),
  )
  .min(1)
  .openapi({ description: 'A list of written or spoken words' })
  .openapi('ArrayOfRelatedEntries')

const SenseSchema: z.ZodType<SenseType> = z
  .lazy(() =>
    z
      .strictObject({
        crossReferenceMarkers: ArrayofstringsSchema.exactOptional(),
        crossReferences: CrossReferencesListSchema.exactOptional(),
        definitions: ArrayofstringsSchema.exactOptional(),
        domains: ArrayofstringsSchema.exactOptional(),
        examples: ExamplesListSchema.exactOptional(),
        id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The id of the sense that is required for the delete procedure',
          }),
        notes: CategorizedTextListSchema.exactOptional(),
        pronunciations: PronunciationsListSchema.exactOptional(),
        regions: ArrayofstringsSchema.exactOptional(),
        registers: ArrayofstringsSchema.exactOptional(),
        short_definitions: ArrayofstringsSchema.exactOptional(),
        subsenses: z
          .array(SenseSchema)
          .min(1)
          .exactOptional()
          .openapi({ description: 'Ordered list of subsenses of a sense' }),
        thesaurusLinks: z
          .array(ThesaurusLinkSchema)
          .min(1)
          .exactOptional()
          .openapi({ description: 'Ordered list of links to the Thesaurus Dictionary' }),
        translations: TranslationsListSchema.exactOptional(),
        variantForms: VariantFormsListSchema.exactOptional(),
      })
      .refine((val) => Object.keys(val).length >= 1)
      .openapi({
        description:
          'A lexical sense represents the lexical meaning of a lexical entry when interpreted as referring to the corresponding ontology element',
        required: [],
      }),
  )
  .openapi('Sense')

const EntrySchema = z
  .strictObject({
    etymologies: ArrayofstringsSchema.exactOptional(),
    grammaticalFeatures: GrammaticalFeaturesListSchema.exactOptional(),
    homographNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies the homograph grouping. The last two digits identify different entries of the same homograph. The first one/two digits identify the homograph number.',
      }),
    notes: CategorizedTextListSchema.exactOptional(),
    pronunciations: PronunciationsListSchema.exactOptional(),
    senses: z
      .array(SenseSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'Complete list of senses' }),
    variantForms: VariantFormsListSchema.exactOptional(),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ required: [] })
  .openapi('Entry')

const FiltersSchema = z
  .object({
    metadata: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Additional Information provided by OUP' }),
    results: z
      .strictObject({
        entries: ArrayofstringsSchema.exactOptional(),
        inflections: ArrayofstringsSchema.exactOptional(),
        translations: ArrayofstringsSchema.exactOptional(),
        wordlist: ArrayofstringsSchema.exactOptional(),
      })
      .refine((val) => Object.keys(val).length >= 1)
      .exactOptional()
      .openapi({ description: 'A mapping of filters available per endpoints.', required: [] }),
  })
  .openapi({ description: 'Schema for the Filters endpoint.', required: [] })
  .openapi('Filters')

const LexicalEntrySchema = z
  .strictObject({
    derivativeOf: ArrayOfRelatedEntriesSchema.exactOptional(),
    derivatives: ArrayOfRelatedEntriesSchema.exactOptional(),
    entries: z.array(EntrySchema).min(1).exactOptional(),
    grammaticalFeatures: GrammaticalFeaturesListSchema.exactOptional(),
    language: z.string().openapi({ description: 'IANA language code' }),
    lexicalCategory: z
      .string()
      .openapi({
        description:
          'A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb',
      }),
    notes: CategorizedTextListSchema.exactOptional(),
    pronunciations: PronunciationsListSchema.exactOptional(),
    text: z
      .string()
      .openapi({ description: 'A given written or spoken realisation of a an entry.' }),
    variantForms: VariantFormsListSchema.exactOptional(),
  })
  .openapi({
    description: 'Description of an entry for a particular part of speech',
    required: ['language', 'lexicalCategory', 'text'],
  })
  .openapi('LexicalEntry')

const HeadwordEntrySchema = z
  .strictObject({
    id: z.string().openapi({ description: 'The identifier of a word' }),
    language: z.string().openapi({ description: 'IANA language code' }),
    lexicalEntries: z
      .array(LexicalEntrySchema)
      .min(1)
      .openapi({
        description:
          'A grouping of various senses in a specific language, and a lexical category that relates to a word',
      }),
    pronunciations: PronunciationsListSchema.exactOptional(),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: "The json object type. Could be 'headword', 'inflection' or 'phrase'",
      }),
    word: z
      .string()
      .openapi({ description: 'A given written or spoken realisation of a an entry, lowercased.' }),
  })
  .openapi({
    description: 'Description of a word',
    required: ['id', 'language', 'lexicalEntries', 'word'],
  })
  .openapi('HeadwordEntry')

const LanguagesSchema = z
  .object({
    metadata: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Additional Information provided by OUP' }),
    results: z
      .array(
        z
          .strictObject({
            region: z.string().exactOptional().openapi({ description: 'Name of region.' }),
            source: z
              .string()
              .exactOptional()
              .openapi({ description: 'Name of source dictionary.' }),
            sourceLanguage: z
              .object({
                id: z.string().exactOptional().openapi({ description: 'IANA language code' }),
                language: z.string().exactOptional().openapi({ description: 'Language label.' }),
              })
              .exactOptional()
              .openapi({ description: 'Source language of the results', required: [] }),
            targetLanguage: z
              .object({
                id: z.string().exactOptional().openapi({ description: 'IANA language code' }),
                language: z.string().exactOptional().openapi({ description: 'Language label.' }),
              })
              .exactOptional()
              .openapi({ description: 'Translation language of the results', required: [] }),
            type: z
              .enum(['monolingual', 'bilingual'])
              .exactOptional()
              .openapi({ description: 'whether monolingual or bilingual.' }),
          })
          .refine((val) => Object.keys(val).length >= 1)
          .openapi({ required: [] }),
      )
      .min(1)
      .exactOptional()
      .openapi({ description: 'A list of languages available.' }),
  })
  .openapi({ description: 'Schema for the languages endpoint.', required: [] })
  .openapi('Languages')

const LemmatronSchema: z.ZodType<LemmatronType> = z
  .lazy(() =>
    z
      .object({
        metadata: z
          .object({})
          .exactOptional()
          .openapi({ description: 'Additional Information provided by OUP' }),
        results: z
          .array(HeadwordLemmatronSchema)
          .min(1)
          .exactOptional()
          .openapi({ description: 'A list of inflections matching a given word' }),
      })
      .openapi({ description: 'Schema for the inflections endpoint.', required: [] }),
  )
  .openapi('Lemmatron')

const NgramsResultSchema = z
  .object({
    metadata: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Additional Information provided by OUP' }),
    results: z
      .array(
        z
          .looseObject({
            frequency: z
              .int()
              .openapi({
                description:
                  'The number of times the ngram (a sequence of n words) appears in the corpus',
              }),
            tokens: z.array(z.string()).min(1).openapi({ description: 'A list of tokens' }),
          })
          .openapi({
            description: 'Ngrams matching the given options',
            required: ['tokens', 'frequency'],
          }),
      )
      .min(0)
      .exactOptional()
      .openapi({ description: 'A list of found ngrams along with their frequencies' }),
  })
  .openapi({ description: 'Schema for corpus ngrams.', required: [] })
  .openapi('NgramsResult')

const RegionsSchema = z
  .object({
    metadata: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Additional Information provided by OUP' }),
    results: z
      .record(z.string(), ArrayofstringsSchema)
      .exactOptional()
      .openapi({ description: 'A mapping of regions available.' }),
  })
  .openapi({ description: 'Schema for region endpoint.', required: [] })
  .openapi('Regions')

const RetrieveEntrySchema = z
  .object({
    metadata: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Additional Information provided by OUP' }),
    results: z
      .array(HeadwordEntrySchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'A list of entries and all the data related to them' }),
  })
  .openapi({ description: "Schema for the 'entries' endpoints", required: [] })
  .openapi('RetrieveEntry')

const SentencesLexicalEntrySchema = z
  .strictObject({
    grammaticalFeatures: GrammaticalFeaturesListSchema.exactOptional(),
    language: z.string().openapi({ description: 'IANA language code' }),
    lexicalCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb',
      }),
    sentences: ExamplesListSchema,
    text: z
      .string()
      .openapi({ description: 'A given written or spoken realisation of a an entry.' }),
  })
  .openapi({
    description: 'Description of an entry for a particular part of speech',
    required: ['language', 'sentences', 'text'],
  })
  .openapi('SentencesLexicalEntry')

const SentencesEntrySchema = z
  .strictObject({
    id: z.string().openapi({ description: 'The identifier of a word' }),
    language: z.string().openapi({ description: 'IANA language code' }),
    lexicalEntries: z
      .array(SentencesLexicalEntrySchema)
      .min(1)
      .openapi({
        description:
          'A grouping of various senses in a specific language, and a lexical category that relates to a word',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: "The json object type. Could be 'headword', 'inflection' or 'phrase'",
      }),
    word: z
      .string()
      .openapi({ description: 'A given written or spoken realisation of a an entry, lowercased.' }),
  })
  .openapi({
    description: 'Description of a word',
    required: ['id', 'language', 'lexicalEntries', 'word'],
  })
  .openapi('SentencesEntry')

const SentencesResultsSchema = z
  .object({
    metadata: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Additional Information provided by OUP' }),
    results: z
      .array(SentencesEntrySchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'A list of entries and all the data related to them' }),
  })
  .openapi({ description: "Schema for the 'sentences' endpoint", required: [] })
  .openapi('SentencesResults')

const StatsWordResultSchema = z
  .object({
    metadata: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Additional Information provided by OUP' }),
    result: z
      .looseObject({
        frequency: z
          .int()
          .openapi({ description: 'The number of times a word appears in the entire corpus' }),
        lemma: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A lemma of the word (e.g., wordforms "lay", "laid" and "laying" have all lemma "lay")',
          }),
        lexicalCategory: z
          .string()
          .exactOptional()
          .openapi({ description: "A lexical category such as 'verb' or 'noun'" }),
        matchCount: z
          .int()
          .openapi({
            description:
              'The number of database records that matched the query params (stated frequency is the sum of the individual frequencies)',
          }),
        normalizedFrequency: z
          .int()
          .openapi({
            description: 'The number of times a word appears on average in 1 million words',
          }),
        trueCase: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A given written realisation of a an entry (e.g., "lay") usually lower case',
          }),
        wordform: z
          .string()
          .exactOptional()
          .openapi({
            description: 'A given written realisation of a an entry (e.g., "Lay") preserving case',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Frequency information for a given entity',
        required: ['frequency', 'normalizedFrequency', 'matchCount'],
      }),
  })
  .openapi({
    description:
      'Schema for lexi-stats results for a word/trueCase/lemma/lexicalCategory returned as a frequency',
    required: [],
  })
  .openapi('StatsWordResult')

const StatsWordResultListSchema = z
  .object({
    metadata: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Additional Information provided by OUP' }),
    results: z
      .array(
        z
          .looseObject({
            frequency: z
              .int()
              .openapi({ description: 'The number of times a word appears in the entire corpus' }),
            lemma: z.string().openapi({ description: 'A lemma of the word.' }),
            lexicalCategory: z
              .string()
              .openapi({ description: "A lexical category such as 'verb' or 'noun'" }),
            normalizedFrequency: z
              .int()
              .openapi({
                description: 'The number of times a word appears on average in 1 million words',
              }),
            trueCase: z
              .string()
              .openapi({
                description:
                  'A given written realisation of a an entry (e.g., "lay") usually lower case',
              }),
            wordform: z
              .string()
              .openapi({
                description:
                  'A given written realisation of a an entry (e.g., "lay") preserving case',
              }),
          })
          .openapi({
            description: 'Statistical information about a word',
            required: [
              'wordform',
              'trueCase',
              'lemma',
              'lexicalCategory',
              'frequency',
              'normalizedFrequency',
            ],
          }),
      )
      .min(0)
      .exactOptional()
      .openapi({ description: 'A list of found words along with their frequencies' }),
  })
  .openapi({
    description:
      'Schema for lexi-stats results for a word/trueCase/lemma/lexicalCategory returned as a list of frequencies per wordform-trueCase-lemma-lexicalCategory entry.',
    required: [],
  })
  .openapi('StatsWordResultList')

const ThesaurusSchema: z.ZodType<ThesaurusType> = z
  .lazy(() =>
    z
      .object({
        metadata: z
          .object({})
          .exactOptional()
          .openapi({ description: 'Additional Information provided by OUP' }),
        results: z
          .array(HeadwordThesaurusSchema)
          .min(1)
          .exactOptional()
          .openapi({ description: 'A list of found synonyms or antonyms' }),
      })
      .openapi({ description: 'Schema for thesaurus endpoint', required: [] }),
  )
  .openapi('Thesaurus')

const UtilityLabelsSchema = z
  .object({
    metadata: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Additional Information provided by OUP' }),
    results: z
      .record(
        z.string(),
        z
          .object({ en: z.string().exactOptional().openapi({ description: 'Label in English' }) })
          .openapi({
            description:
              'the list of labels for an object. Every object can be a lexical category, or a register, or a domain.',
            required: [],
          }),
      )
      .exactOptional()
      .openapi({ description: 'Mapping of labels available.' }),
  })
  .openapi({
    description: 'Schema for lexicalcategories, registers utility endpoints.',
    required: [],
  })
  .openapi('UtilityLabels')

const WordlistSchema = z
  .object({
    metadata: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Additional Information provided by OUP' }),
    results: z
      .array(
        z
          .looseObject({
            id: z.string().openapi({ description: 'The identifier of a word' }),
            matchString: z.string().nullable().exactOptional(),
            matchType: z.string().exactOptional(),
            region: z.string().exactOptional().openapi({ description: 'Name of region.' }),
            word: z
              .string()
              .openapi({
                description: 'A given written or spoken realisation of a an entry, lowercased.',
              }),
          })
          .openapi({ description: 'Description of found word', required: ['id', 'word'] }),
      )
      .min(0)
      .exactOptional()
      .openapi({ description: 'A list of found words' }),
  })
  .openapi({ description: 'Schema for wordlist endpoint.', required: [] })
  .openapi('Wordlist')

const AppIdParamsSchema = z
  .string()
  .default('5037d509')
  .openapi({
    param: {
      description: 'App ID Authentication Parameter',
      in: 'header',
      name: 'app_id',
      required: true,
      schema: { default: '5037d509', type: 'string' },
      'x-data-threescale-name': 'app_ids',
    },
  })

const AppKeyParamsSchema = z
  .string()
  .default('4dc1aebaa63721f0f8e79a55e2514bc7')
  .openapi({
    param: {
      description: 'App Key Authentication Parameter',
      in: 'header',
      name: 'app_key',
      required: true,
      schema: { default: '4dc1aebaa63721f0f8e79a55e2514bc7', type: 'string' },
      'x-data-threescale-name': 'app_keys',
    },
  })

const EntriesWordIdParamsSchema = z
  .string()
  .default('ace')
  .openapi({
    param: {
      description: 'An Entry identifier. Case-sensitive.',
      in: 'path',
      name: 'word_id',
      required: true,
      schema: { default: 'ace', type: 'string' },
    },
  })

const KeyValFiltersParamsSchema = z
  .string()
  .default('grammaticalFeatures=singular,past;lexicalCategory=noun')
  .openapi({
    param: {
      description:
        'Separate filtering conditions using a semicolon. Conditions take values grammaticalFeatures and/or lexicalCategory and are case-sensitive. To list multiple values in single condition divide them with comma.',
      in: 'path',
      name: 'filters',
      required: true,
      schema: {
        default: 'grammaticalFeatures=singular,past;lexicalCategory=noun',
        items: { pattern: '(lexicalCategory|grammaticalFeatures)=.+', type: 'string' },
        type: 'string',
      },
      style: 'simple',
    },
  })

const MonolingualLemmatronSourceLangParamsSchema = z
  .enum(['en', 'es', 'hi', 'nso', 'tn', 'zu', 'de', 'pt'])
  .openapi({
    param: {
      description: 'IANA language code',
      in: 'path',
      name: 'source_lang',
      required: true,
      schema: { enum: ['en', 'es', 'hi', 'nso', 'tn', 'zu', 'de', 'pt'], type: 'string' },
    },
  })

const MonolingualSourceLangParamsSchema = z
  .enum(['en', 'es', 'lv', 'hi', 'sw', 'ta', 'gu', 'fr'])
  .openapi({
    param: {
      description: 'IANA language code',
      in: 'path',
      name: 'source_lang',
      required: true,
      schema: { enum: ['en', 'es', 'lv', 'hi', 'sw', 'ta', 'gu', 'fr'], type: 'string' },
    },
  })

const MonolingualWordlistSourceLangParamsSchema = z
  .enum(['en', 'es', 'hi', 'lv', 'sw', 'ta', 'gu'])
  .openapi({
    param: {
      description: 'IANA language code',
      in: 'path',
      name: 'source_lang',
      required: true,
      schema: { enum: ['en', 'es', 'hi', 'lv', 'sw', 'ta', 'gu'], type: 'string' },
    },
  })

const ThesaurusSourceLangParamsSchema = z
  .literal('en')
  .openapi({
    param: {
      description: 'IANA language code',
      in: 'path',
      name: 'source_lang',
      required: true,
      schema: { enum: ['en'], type: 'string' },
    },
  })

export const getDomainsSourceDomainsLanguageTargetDomainsLanguageRoute = createRoute({
  method: 'get',
  path: '/domains/{source_domains_language}/{target_domains_language}',
  tags: ['Utility'],
  summary: 'Lists available domains in a bilingual dataset',
  description:
    'Returns a list of the available [domains](documentation/glossary?term=domain) for a given bilingual language dataset.\n',
  request: {
    params: z.object({
      source_domains_language: z
        .enum(['en', 'es', 'nso', 'zu', 'ur', 'de', 'pt'])
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'source_domains_language',
            required: true,
            schema: { enum: ['en', 'es', 'nso', 'zu', 'ur', 'de', 'pt'], type: 'string' },
          },
        }),
      target_domains_language: z
        .enum(['es', 'nso', 'zu', 'ms', 'id', 'tn', 'ro', 'de', 'pt'])
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'target_domains_language',
            required: true,
            schema: {
              enum: ['es', 'nso', 'zu', 'ms', 'id', 'tn', 'ro', 'de', 'pt'],
              type: 'string',
            },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: UtilityLabelsSchema } },
    },
    400: { description: 'source_language and target_language are same.' },
    404: { description: 'Unknown source_language and/or target_language.' },
  },
})

export const getDomainsSourceLanguageRoute = createRoute({
  method: 'get',
  path: '/domains/{source_language}',
  tags: ['Utility'],
  summary: 'Lists available domains in a monolingual dataset',
  description:
    'Returns a list of the available [domains](documentation/glossary?term=domain) for a given monolingual language dataset.\n',
  request: {
    params: z.object({
      source_language: z
        .enum(['en', 'es', 'nso', 'zu', 'hi', 'sw', 'ur', 'de', 'pt', 'ta', 'gu'])
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'source_language',
            required: true,
            schema: {
              enum: ['en', 'es', 'nso', 'zu', 'hi', 'sw', 'ur', 'de', 'pt', 'ta', 'gu'],
              type: 'string',
            },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: UtilityLabelsSchema } },
    },
    404: { description: 'Unknown source_language.' },
  },
})

export const getEntriesSourceLanguageWordIdSentencesRoute = createRoute({
  method: 'get',
  path: '/entries/{source_language}/{word_id}/sentences',
  tags: ['The Sentence Dictionary'],
  summary: 'Retrieve corpus sentences for a given word',
  description:
    '\nUse this to retrieve sentences extracted from  corpora which show how a word is used in the language. This is available for English and Spanish. For English, the sentences are linked to the correct [sense](documentation/glossary?term=sense) of the word in the dictionary. In Spanish, they are linked at the [headword](documentation/glossary?term=headword) level.\n  <div id="sentences"></div>\n',
  externalDocs: { description: 'find more info here', url: 'https://helloreverb.com/about' },
  request: {
    params: z.object({
      source_language: z
        .enum(['en', 'es'])
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'source_language',
            required: true,
            schema: { enum: ['en', 'es'], type: 'string' },
          },
        }),
      word_id: z
        .string()
        .default('ace')
        .openapi({
          param: {
            description: 'An Entry identifier. Case-sensitive.',
            in: 'path',
            name: 'word_id',
            required: true,
            schema: { default: 'ace', type: 'string' },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: SentencesResultsSchema } },
    },
    404: { description: 'No entry is found matching supplied id and source_language\n' },
    500: { description: 'Internal Error. An error occurred while processing the data.\n' },
  },
})

export const getEntriesSourceLangWordIdRoute = createRoute({
  method: 'get',
  path: '/entries/{source_lang}/{word_id}',
  tags: ['Dictionary entries'],
  summary: 'Retrieve dictionary information for a given word',
  description:
    "\nUse this to retrieve definitions, [pronunciations](documentation/glossary?term=pronunciation), example sentences, [grammatical information](documentation/glossary?term=grammaticalfeatures) and [word origins](documentation/glossary?term=etymology). It only works for dictionary [headwords](documentation/glossary?term=headword), so you may need to use the [Lemmatron](documentation/glossary?term=lemma) first if your input is likely to be an [inflected](documentation/glossary?term=inflection) form (e.g., 'swimming'). This would return the linked [headword](documentation/glossary?term=headword) (e.g., 'swim') which you can then use in the Entries endpoint. Unless specified using a region filter, the default lookup will be the Oxford Dictionary of English (GB). \n  <div id=\"dictionary_entries\"></div>\n",
  externalDocs: { description: 'find more info here', url: 'https://helloreverb.com/about' },
  request: {
    params: z.object({
      source_lang: z
        .enum(['en', 'es', 'lv', 'hi', 'sw', 'ta', 'gu', 'fr'])
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'source_lang',
            required: true,
            schema: { enum: ['en', 'es', 'lv', 'hi', 'sw', 'ta', 'gu', 'fr'], type: 'string' },
          },
        }),
      word_id: z
        .string()
        .default('ace')
        .openapi({
          param: {
            description: 'An Entry identifier. Case-sensitive.',
            in: 'path',
            name: 'word_id',
            required: true,
            schema: { default: 'ace', type: 'string' },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: RetrieveEntrySchema } },
    },
    404: {
      description:
        'No entry is found matching supplied id and source_lang or filters are not recognized\n',
    },
    500: { description: 'Internal Error. An error occurred while processing the data.\n' },
  },
})

export const getEntriesSourceLangWordIdAntonymsRoute = createRoute({
  method: 'get',
  path: '/entries/{source_lang}/{word_id}/antonyms',
  tags: ['Thesaurus'],
  summary: 'Retrieve words that mean the opposite',
  description:
    '\nRetrieve words that are opposite in meaning to the input word ([antonym](documentation/glossary?term=thesaurus)).\n\n  <div id="antonyms"></div>\n',
  externalDocs: { description: 'find more info here', url: 'https://helloreverb.com/about' },
  request: {
    params: z.object({
      source_lang: z
        .literal('en')
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'source_lang',
            required: true,
            schema: { enum: ['en'], type: 'string' },
          },
        }),
      word_id: z
        .string()
        .default('ace')
        .openapi({
          param: {
            description: 'An Entry identifier. Case-sensitive.',
            in: 'path',
            name: 'word_id',
            required: true,
            schema: { default: 'ace', type: 'string' },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: ThesaurusSchema } },
    },
    404: {
      description:
        'No entry is found matching supplied id and source_lang or filters are not recognized\n',
    },
    500: { description: 'Internal Error. An error occurred while processing the data.\n' },
  },
})

export const getEntriesSourceLangWordIdRegionsRegionRoute = createRoute({
  method: 'get',
  path: '/entries/{source_lang}/{word_id}/regions={region}',
  tags: ['Dictionary entries'],
  summary: 'Specify GB or US dictionary for English entry search',
  description:
    '\nUSe this filter to restrict the lookup to either our Oxford Dictionary of English (GB) or New Oxford American Dictionary (US).\n',
  externalDocs: { description: 'find more info here', url: 'https://helloreverb.com/about' },
  request: {
    params: z.object({
      source_lang: z
        .literal('en')
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'source_lang',
            required: true,
            schema: { enum: ['en'], type: 'string' },
          },
        }),
      word_id: z
        .string()
        .default('ace')
        .openapi({
          param: {
            description: 'An Entry identifier. Case-sensitive.',
            in: 'path',
            name: 'word_id',
            required: true,
            schema: { default: 'ace', type: 'string' },
          },
        }),
      region: z
        .enum(['gb', 'us'])
        .openapi({
          param: {
            description:
              'Region filter parameter. gb = Oxford Dictionary of English. us = New Oxford American Dictionary.',
            in: 'path',
            name: 'region',
            required: true,
            schema: { enum: ['gb', 'us'], type: 'string' },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: RetrieveEntrySchema } },
    },
    404: {
      description:
        'no entry is found matching supplied source_lang and id\nand/or that entry has no senses with translations in the target language. \n',
    },
    500: { description: 'Internal Error. An error occurred while processing the data.\n' },
  },
})

export const getEntriesSourceLangWordIdSynonymsRoute = createRoute({
  method: 'get',
  path: '/entries/{source_lang}/{word_id}/synonyms',
  tags: ['Thesaurus'],
  summary: 'Retrieve words that are similar',
  description:
    '\nUse this to retrieve words that are similar in meaning to the input word ([synonym](documentation/glossary?term=synonym)).\n\n  <div id="synonyms"></div>\n',
  externalDocs: { description: 'find more info here', url: 'https://helloreverb.com/about' },
  request: {
    params: z.object({
      source_lang: z
        .literal('en')
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'source_lang',
            required: true,
            schema: { enum: ['en'], type: 'string' },
          },
        }),
      word_id: z
        .string()
        .default('ace')
        .openapi({
          param: {
            description: 'An Entry identifier. Case-sensitive.',
            in: 'path',
            name: 'word_id',
            required: true,
            schema: { default: 'ace', type: 'string' },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: ThesaurusSchema } },
    },
    404: {
      description:
        'No entry is found matching supplied id and source_lang or filters are not recognized\n',
    },
    500: { description: 'Internal Error. An error occurred while processing the data.\n' },
  },
})

export const getEntriesSourceLangWordIdSynonymsAntonymsRoute = createRoute({
  method: 'get',
  path: '/entries/{source_lang}/{word_id}/synonyms;antonyms',
  tags: ['Thesaurus'],
  summary: 'Retrieve synonyms and antonyms for a given word',
  description:
    '\nRetrieve available [synonyms](documentation/glossary?term=thesaurus) and [antonyms](documentation/glossary?term=thesaurus) for a given word and language. \n\n  <div id="synonyms_and_antonyms"></div>\n',
  externalDocs: { description: 'find more info here', url: 'https://helloreverb.com/about' },
  request: {
    params: z.object({
      source_lang: z
        .literal('en')
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'source_lang',
            required: true,
            schema: { enum: ['en'], type: 'string' },
          },
        }),
      word_id: z
        .string()
        .default('ace')
        .openapi({
          param: {
            description: 'An Entry identifier. Case-sensitive.',
            in: 'path',
            name: 'word_id',
            required: true,
            schema: { default: 'ace', type: 'string' },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: ThesaurusSchema } },
    },
    404: {
      description:
        'No entry is found matching supplied id and source_lang or filters are not recognized\n',
    },
    500: { description: 'Internal Error. An error occurred while processing the data.\n' },
  },
})

export const getEntriesSourceLangWordIdFiltersRoute = createRoute({
  method: 'get',
  path: '/entries/{source_lang}/{word_id}/{filters}',
  tags: ['Dictionary entries'],
  summary: 'Apply filters to response',
  description:
    "\nUse filters to limit the [entry](documentation/glossary?term=entry) information that is returned. For example, you may only require definitions and not everything else, or just [pronunciations](documentation/glossary?term=pronunciation). The full list of filters can be retrieved from the filters Utility endpoint. You can also specify values within the filter using '='. For example 'grammaticalFeatures=singular'. Filters can also be combined using a semicolon.\n\n  <div id=\"dictionary_entries_filters\"></div>\n",
  request: {
    params: z.object({
      source_lang: z
        .enum(['en', 'es', 'lv', 'hi', 'sw', 'ta', 'gu', 'fr'])
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'source_lang',
            required: true,
            schema: { enum: ['en', 'es', 'lv', 'hi', 'sw', 'ta', 'gu', 'fr'], type: 'string' },
          },
        }),
      word_id: z
        .string()
        .default('ace')
        .openapi({
          param: {
            description: 'An Entry identifier. Case-sensitive.',
            in: 'path',
            name: 'word_id',
            required: true,
            schema: { default: 'ace', type: 'string' },
          },
        }),
      filters: z
        .string()
        .default('grammaticalFeatures=singular,past;lexicalCategory=noun')
        .openapi({
          param: {
            description:
              'Separate filtering conditions using a semicolon. Conditions take values grammaticalFeatures and/or lexicalCategory and are case-sensitive. To list multiple values in single condition divide them with comma.',
            in: 'path',
            name: 'filters',
            required: true,
            schema: {
              default: 'grammaticalFeatures=singular,past;lexicalCategory=noun',
              items: { pattern: '(lexicalCategory|grammaticalFeatures)=.+', type: 'string' },
              type: 'string',
            },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: RetrieveEntrySchema } },
    },
    404: {
      description:
        'no entry is found matching supplied source_lang and id\nand/or that entry has no senses with translations in the target language. \n',
    },
    500: { description: 'Internal Error. An error occurred while processing the data.\n' },
  },
})

export const getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageRoute =
  createRoute({
    method: 'get',
    path: '/entries/{source_translation_language}/{word_id}/translations={target_translation_language}',
    tags: ['Translation'],
    summary: 'Retrieve translation for a given word',
    description:
      '\nUse this to return translations for a given word. In the event that a word in the dataset does not have a direct translation, the response will be a [definition](documentation/glossary?term=entry) in the target language.\n\n  <div id="translation"></div>\n',
    request: {
      params: z.object({
        source_translation_language: z
          .enum(['en', 'es', 'nso', 'zu', 'ms', 'id', 'tn', 'ur', 'de', 'pt'])
          .openapi({
            param: {
              description: 'IANA language code',
              in: 'path',
              name: 'source_translation_language',
              required: true,
              schema: {
                enum: ['en', 'es', 'nso', 'zu', 'ms', 'id', 'tn', 'ur', 'de', 'pt'],
                type: 'string',
              },
            },
          }),
        word_id: z
          .string()
          .default('change')
          .openapi({
            param: {
              description: 'The source word',
              in: 'path',
              name: 'word_id',
              required: true,
              schema: { default: 'change', type: 'string' },
            },
          }),
        target_translation_language: z
          .enum(['es', 'nso', 'zu', 'ms', 'id', 'tn', 'ro', 'de', 'pt'])
          .openapi({
            param: {
              description: 'IANA language code',
              in: 'path',
              name: 'target_translation_language',
              required: true,
              schema: {
                enum: ['es', 'nso', 'zu', 'ms', 'id', 'tn', 'ro', 'de', 'pt'],
                type: 'string',
              },
            },
          }),
      }),
      headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
    },
    responses: {
      200: {
        description:
          "Successful response. In case word doesn't have a direct translation a response would be definitions.",
        content: { 'application/json': { schema: RetrieveEntrySchema } },
      },
      400: { description: 'any of target languages is unknown' },
      404: {
        description:
          'no entry is found matching supplied source_lang and id\nand/or that entry has no senses with translations in the target language(s). \n',
      },
      500: { description: 'Internal Error. An error occurred while processing the data.\n' },
    },
  })

export const getFiltersRoute = createRoute({
  method: 'get',
  path: '/filters',
  tags: ['Utility'],
  summary: 'Lists available filters',
  description: 'Returns a list of all the valid filters to construct API calls.\n',
  request: { headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }) },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: FiltersSchema } },
    },
    500: { description: 'Internal Error. An error occurred while processing the data.' },
  },
})

export const getFiltersEndpointRoute = createRoute({
  method: 'get',
  path: '/filters/{endpoint}',
  tags: ['Utility'],
  summary: 'Lists available filters for specific endpoint',
  description:
    'Returns a list of all the valid filters for a given endpoint to construct API calls.\n',
  request: {
    params: z.object({
      endpoint: z
        .enum(['entries', 'inflections', 'translations'])
        .openapi({
          param: {
            description: 'Name of the endpoint.',
            in: 'path',
            name: 'endpoint',
            required: true,
            schema: { enum: ['entries', 'inflections', 'translations'], type: 'string' },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: FiltersSchema } },
    },
    404: { description: 'Unknown endpoint.' },
    500: { description: 'Internal Error. An error occurred while processing the data.' },
  },
})

export const getGrammaticalFeaturesSourceLanguageRoute = createRoute({
  method: 'get',
  path: '/grammaticalFeatures/{source_language}',
  tags: ['Utility'],
  summary: 'Lists available grammatical features in a dataset',
  description:
    'Returns a list of the available [grammatical features](documentation/glossary?term=grammaticalfeatures) for a given language dataset.\n',
  request: {
    params: z.object({
      source_language: z
        .enum(['en', 'es', 'lv', 'nso', 'zu', 'ms', 'tn', 'ur', 'hi', 'sw', 'de', 'pt', 'ta', 'gu'])
        .openapi({
          param: {
            description:
              'IANA language code. If provided output will be filtered by sourceLanguage.',
            in: 'path',
            name: 'source_language',
            required: true,
            schema: {
              enum: [
                'en',
                'es',
                'lv',
                'nso',
                'zu',
                'ms',
                'tn',
                'ur',
                'hi',
                'sw',
                'de',
                'pt',
                'ta',
                'gu',
              ],
              type: 'string',
            },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: UtilityLabelsSchema } },
    },
    404: { description: 'Unknown source_language.' },
  },
})

export const getInflectionsSourceLangWordIdFiltersRoute = createRoute({
  method: 'get',
  path: '/inflections/{source_lang}/{word_id}/{filters}',
  tags: ['Lemmatron'],
  summary: 'Check a word exists in the dictionary and retrieve its root form',
  description:
    '\nUse this to check if a word exists in the dictionary, or what \'root\' form it links to (e.g., swimming > swim). The response tells you the possible [lemmas](documentation/glossary?term=lemma) for a given [inflected](documentation/glossary?term=inflection) word. This can then be combined with other endpoints to retrieve more information.\n\n  <div id="lemmatron"></div>\n',
  request: {
    params: z.object({
      source_lang: z
        .enum(['en', 'es', 'hi', 'nso', 'tn', 'zu', 'de', 'pt'])
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'source_lang',
            required: true,
            schema: { enum: ['en', 'es', 'hi', 'nso', 'tn', 'zu', 'de', 'pt'], type: 'string' },
          },
        }),
      filters: z
        .string()
        .default('grammaticalFeatures=singular,past;lexicalCategory=noun')
        .openapi({
          param: {
            description:
              'Separate filtering conditions using a semicolon. Conditions take values grammaticalFeatures and/or lexicalCategory and are case-sensitive. To list multiple values in single condition divide them with comma.',
            in: 'path',
            name: 'filters',
            required: true,
            schema: {
              default: 'grammaticalFeatures=singular,past;lexicalCategory=noun',
              items: { pattern: '(lexicalCategory|grammaticalFeatures)=.+', type: 'string' },
              type: 'string',
            },
            style: 'simple',
          },
        }),
      word_id: z
        .string()
        .default('swimming')
        .openapi({
          param: {
            description: 'The input word',
            in: 'path',
            name: 'word_id',
            required: true,
            schema: { default: 'swimming', type: 'string' },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: LemmatronSchema } },
    },
    500: { description: 'Internal Error. An error occurred while processing the data.\n' },
  },
})

export const getLanguagesRoute = createRoute({
  method: 'get',
  path: '/languages',
  tags: ['Utility'],
  summary: 'Lists available dictionaries',
  description:
    'Returns a list of monolingual and bilingual language datasets available in the API\n',
  request: {
    query: z.object({
      sourceLanguage: z
        .enum([
          'es',
          'en',
          'lv',
          'nso',
          'zu',
          'ms',
          'id',
          'tn',
          'ur',
          'hi',
          'sw',
          'ro',
          'de',
          'pt',
          'ta',
          'gu',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              'IANA language code. If provided output will be filtered by sourceLanguage.',
            in: 'query',
            name: 'sourceLanguage',
            required: false,
            schema: {
              enum: [
                'es',
                'en',
                'lv',
                'nso',
                'zu',
                'ms',
                'id',
                'tn',
                'ur',
                'hi',
                'sw',
                'ro',
                'de',
                'pt',
                'ta',
                'gu',
              ],
              type: 'string',
            },
          },
        }),
      targetLanguage: z
        .enum(['es', 'en', 'lv', 'nso', 'zu', 'ms', 'id', 'tn', 'ur', 'hi', 'sw', 'ro'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'IANA language code. If provided output will be filtered by sourceLanguage.',
            in: 'query',
            name: 'targetLanguage',
            required: false,
            schema: {
              enum: ['es', 'en', 'lv', 'nso', 'zu', 'ms', 'id', 'tn', 'ur', 'hi', 'sw', 'ro'],
              type: 'string',
            },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: LanguagesSchema } },
    },
    404: { description: 'Unknown sourceLanguage and/or targetLanguage.' },
    500: { description: 'Internal Error. An error occurred while processing the data.' },
  },
})

export const getLexicalcategoriesLanguageRoute = createRoute({
  method: 'get',
  path: '/lexicalcategories/{language}',
  tags: ['Utility'],
  summary: 'Lists available lexical categories in a dataset',
  description:
    'Returns a list of available [lexical categories](documentation/glossary?term=lexicalcategory) for a given language dataset.\n',
  request: {
    params: z.object({
      language: z
        .enum([
          'es',
          'en',
          'lv',
          'nso',
          'zu',
          'ms',
          'id',
          'tn',
          'ur',
          'hi',
          'sw',
          'ro',
          'de',
          'pt',
          'ta',
          'gu',
        ])
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'language',
            required: true,
            schema: {
              enum: [
                'es',
                'en',
                'lv',
                'nso',
                'zu',
                'ms',
                'id',
                'tn',
                'ur',
                'hi',
                'sw',
                'ro',
                'de',
                'pt',
                'ta',
                'gu',
              ],
              type: 'string',
            },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: UtilityLabelsSchema } },
    },
    404: { description: 'Unknown language.' },
    500: { description: 'Internal Error. An error occurred while processing the data.' },
  },
})

export const getRegionsSourceLanguageRoute = createRoute({
  method: 'get',
  path: '/regions/{source_language}',
  tags: ['Utility'],
  summary: 'Lists available regions in a monolingual dataset',
  description:
    'Returns a list of the available [regions](documentation/glossary?term=regions) for a given monolingual language dataset.\n',
  request: {
    params: z.object({
      source_language: z
        .literal('en')
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'source_language',
            required: true,
            schema: { enum: ['en'], type: 'string' },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: RegionsSchema } },
    },
    404: { description: 'Unknown source_language.' },
  },
})

export const getRegistersSourceLanguageRoute = createRoute({
  method: 'get',
  path: '/registers/{source_language}',
  tags: ['Utility'],
  summary: 'Lists available registers in a  monolingual dataset',
  description:
    'Returns a list of the available [registers](documentation/glossary?term=registers) for a given monolingual language dataset.\n',
  request: {
    params: z.object({
      source_language: z
        .enum(['en', 'es', 'hi', 'id', 'lv', 'ms', 'sw', 'ur', 'de', 'pt', 'ta', 'gu'])
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'source_language',
            required: true,
            schema: {
              enum: ['en', 'es', 'hi', 'id', 'lv', 'ms', 'sw', 'ur', 'de', 'pt', 'ta', 'gu'],
              type: 'string',
            },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: UtilityLabelsSchema } },
    },
    404: { description: 'Unknown source_language.' },
    500: { description: 'Internal Error. An error occurred while processing the data.' },
  },
})

export const getRegistersSourceRegisterLanguageTargetRegisterLanguageRoute = createRoute({
  method: 'get',
  path: '/registers/{source_register_language}/{target_register_language}',
  tags: ['Utility'],
  summary: 'Lists available registers in a bilingual dataset',
  description:
    'Returns a list of the available [registers](documentation/glossary?term=registers) for a given bilingual language dataset.\n',
  request: {
    params: z.object({
      source_register_language: z
        .enum(['en', 'es', 'ms', 'id', 'ur', 'de', 'pt'])
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'source_register_language',
            required: true,
            schema: { enum: ['en', 'es', 'ms', 'id', 'ur', 'de', 'pt'], type: 'string' },
          },
        }),
      target_register_language: z
        .enum(['es', 'en', 'nso', 'zu', 'ms', 'id', 'tn', 'ro', 'de', 'pt'])
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'target_register_language',
            required: true,
            schema: {
              enum: ['es', 'en', 'nso', 'zu', 'ms', 'id', 'tn', 'ro', 'de', 'pt'],
              type: 'string',
            },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: UtilityLabelsSchema } },
    },
    400: { description: 'source_language and target_language are same.' },
    404: { description: 'Unknown source_language and/or target_language.' },
    500: { description: 'Internal Error. An error occurred while processing the data.' },
  },
})

export const getSearchSourceLangRoute = createRoute({
  method: 'get',
  path: '/search/{source_lang}',
  tags: ['Search'],
  summary: 'Retrieve possible matches to input',
  description:
    '\nUse this to retrieve possible [headword](documentation/glossary?term=headword) matches for a given string of text. The results are culculated using headword matching, fuzzy matching, and [lemmatization](documentation/glossary?term=lemma) \n\n  <div id="search"></div>\n',
  externalDocs: { description: 'find more info here', url: 'https://helloreverb.com/about' },
  request: {
    params: z.object({
      source_lang: z
        .enum(['en', 'es', 'hi', 'lv', 'sw', 'ta', 'gu'])
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'source_lang',
            required: true,
            schema: { enum: ['en', 'es', 'hi', 'lv', 'sw', 'ta', 'gu'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      q: z
        .string()
        .default('eye')
        .exactOptional()
        .openapi({
          param: {
            description: 'Search string',
            in: 'query',
            name: 'q',
            required: false,
            schema: { default: 'eye', type: 'string' },
          },
        }),
      prefix: z
        .union([z.literal('false'), z.literal('true')])
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              "Set prefix to true if you'd like to get results only starting with search string.",
            in: 'query',
            name: 'prefix',
            required: false,
            schema: { default: 'false', enum: ['false', 'true'], type: 'boolean' },
          },
        }),
      regions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If searching in English, filter words with specific region(s) either 'us' or 'gb'.",
            in: 'query',
            name: 'regions',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the number of results per response. Default and maximum limit is 5000.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Offset the start number of the result.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: WordlistSchema } },
    },
    404: {
      description:
        'No entry is found matching supplied id and source_lang or filters are not recognized\n',
    },
    500: { description: 'Internal Error. An error occurred while processing the data.\n' },
  },
})

export const getSearchSourceSearchLanguageTranslationsTargetSearchLanguageRoute = createRoute({
  method: 'get',
  path: '/search/{source_search_language}/translations={target_search_language}',
  tags: ['Search'],
  summary: 'Retrieve possible translation matches to input',
  description:
    '\nUse this to find matches in our translation dictionaries.\n\n  <div id="search_translation"></div>\n',
  externalDocs: { description: 'find more info here', url: 'https://helloreverb.com/about' },
  request: {
    params: z.object({
      source_search_language: z
        .enum(['en', 'es', 'nso', 'zu', 'ms', 'id', 'tn', 'ur', 'de', 'pt'])
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'source_search_language',
            required: true,
            schema: {
              enum: ['en', 'es', 'nso', 'zu', 'ms', 'id', 'tn', 'ur', 'de', 'pt'],
              type: 'string',
            },
          },
        }),
      target_search_language: z
        .enum(['es', 'nso', 'zu', 'ms', 'id', 'tn', 'ro', 'de', 'pt'])
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'target_search_language',
            required: true,
            schema: {
              enum: ['es', 'nso', 'zu', 'ms', 'id', 'tn', 'ro', 'de', 'pt'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      q: z
        .string()
        .default('eye')
        .exactOptional()
        .openapi({
          param: {
            description: 'Search string.',
            in: 'query',
            name: 'q',
            required: false,
            schema: { default: 'eye', type: 'string' },
          },
        }),
      prefix: z
        .union([z.literal('false'), z.literal('true')])
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              "Set prefix to true if you'd like to get results only starting with search string.",
            in: 'query',
            name: 'prefix',
            required: false,
            schema: { default: 'false', enum: ['false', 'true'], type: 'boolean' },
          },
        }),
      regions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter words with specific region(s) E.g., regions=us. For now gb, us are available for en language.',
            in: 'query',
            name: 'regions',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the number of results per response. Default and maximum limit is 5000.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Offset the start number of the result.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: WordlistSchema } },
    },
    404: {
      description:
        'No entry is found matching supplied id and source_lang or filters are not recognized\n',
    },
    500: { description: 'Internal Error. An error occurred while processing the data.\n' },
  },
})

export const getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexRoute = createRoute({
  method: 'get',
  path: '/stats/frequency/ngrams/{source_lang}/{corpus}/{ngram-size}/',
  tags: ['LexiStats'],
  summary: 'Retrieve the frequency of ngrams (1-4) derived from a corpus',
  description:
    'This endpoint returns frequencies of ngrams of size 1-4. That is the number of times a word (ngram size = 1) or words (ngram size > 1) appear in the corpus. Ngrams are case sensitive ("I AM" and "I am" will have different frequency) and frequencies are calculated per word (true case) so "the book" and "the books" are two different ngrams. The results can be filtered based on query parameters. <br> <br> Parameters can be provided in PATH, GET or POST (form or json). The parameters in PATH are overridden by parameters in GET, POST and json (in that order). In PATH, individual options are separated by semicolon and values are separated by commas (where multiple values can be used). <br> <br> Example for bigrams (ngram of size 2):\n* PATH: /tokens=a word,another word\n* GET: /?tokens=a word&tokens=another word\n* POST (json):\n\n  ```javascript\n    {\n        "tokens": ["a word", "another word"]\n    }\n  ```\n\nEither "tokens" or "contains" has to be provided. <br> <br> Some queries with "contains" or "sort" can exceed the 30s timeout, in which case the API will return an error message with status code 503. You mitigate this by providing additional restrictions such as "minFrequency" and "maxFrequency". <br> <br> You can use the parameters "offset" and "limit" to paginate through large result sets. For convenience, the HTTP header "Link" is set on the response to provide links to "first", "self", "next", "prev" and "last" pages of results (depending on the context). For example, if the result set contains 50 results and the parameter "limit" is set to 25, the Links header will contain an URL for the first 25 results and the next 25 results. <br> <br> Some libraries such as python\'s `requests` can parse the header automatically and offer a convenient way of iterating through the results. For example:\n```python def get_all_results(url):\n    while url:\n        r = requests.get(url)\n        r.raise_for_status()\n        for item in r.json()[\'results\']:\n          yield item\n        url = r.links.get(\'next\', {}).get(\'url\')\n```\n',
  request: {
    params: z.object({
      source_lang: z
        .string()
        .default('en')
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'source_lang',
            required: true,
            schema: { default: 'en', type: 'string' },
          },
        }),
      corpus: z
        .string()
        .default('nmc')
        .openapi({
          param: {
            description:
              "For corpora other than 'nmc' (New Monitor Corpus) please contact api@oxforddictionaries.com",
            in: 'path',
            name: 'corpus',
            required: true,
            schema: { default: 'nmc', type: 'string' },
          },
        }),
      'ngram-size': z
        .string()
        .default('2')
        .openapi({
          param: {
            description: 'the size of ngrams requested (1-4)',
            in: 'path',
            name: 'ngram-size',
            required: true,
            schema: { default: 2, type: 'string' },
          },
        }),
    }),
    query: z.object({
      tokens: z
        .string()
        .default('a word')
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of tokens to filter. The tokens are separated by spaces, the list items are separated by comma (e.g., for bigrams (n=2) tokens=this is,this was, this will)',
            in: 'query',
            name: 'tokens',
            required: false,
            schema: { default: 'a word', type: 'string' },
          },
        }),
      contains: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Find ngrams containing the given token(s). Use comma or space as token separators; the order of tokens is irrelevant.',
            in: 'query',
            name: 'contains',
            required: false,
            schema: { type: 'string' },
          },
        }),
      punctuation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag specifying whether to lookup ngrams that include punctuation or not (possible values are "true" and "false"; default is "false")',
            in: 'query',
            name: 'punctuation',
            required: false,
            schema: { type: 'string' },
          },
        }),
      format: z
        .string()
        .default('oup')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Option specifying whether tokens should be returned as a single string (option "google") or as a list of strings (option "oup")',
            in: 'query',
            name: 'format',
            required: false,
            schema: { default: 'oup', type: 'string' },
          },
        }),
      minFrequency: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict the query to entries with frequency of at least `minFrequency`',
            in: 'query',
            name: 'minFrequency',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      maxFrequency: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict the query to entries with frequency of at most `maxFrequency`',
            in: 'query',
            name: 'maxFrequency',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      minDocumentFrequency: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restrict the query to entries that appear in at least `minDocumentFrequency` documents',
            in: 'query',
            name: 'minDocumentFrequency',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      maxDocumentFrequency: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restrict the query to entries that appera in at most `maxDocumentFrequency` documents',
            in: 'query',
            name: 'maxDocumentFrequency',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      collate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'collate the results by wordform, trueCase, lemma, lexicalCategory. Multiple values can be separated by commas (e.g., collate=trueCase,lemma,lexicalCategory).',
            in: 'query',
            name: 'collate',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "sort the resulting list by wordform, trueCase, lemma, lexicalCategory, frequency, normalizedFrequency. Descending order is achieved by prepending the value with the minus sign ('-'). Multiple values can be separated by commas (e.g., sort=lexicalCategory,-frequency)",
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            description: 'pagination - results offset',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int64', type: 'integer' },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(100n)
        .exactOptional()
        .openapi({
          param: {
            description: 'pagination - results limit',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 100, format: 'int64', type: 'integer' },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: {
        'application/json': { schema: NgramsResultSchema },
        'text/csv': { schema: NgramsResultSchema },
      },
    },
    400: { description: 'Invalid option name...\n' },
    404: { description: 'language is not in...\n' },
    500: { description: 'Internal Error. An error occurred while processing the data.\n' },
  },
})

export const getStatsFrequencyWordSourceLangIndexRoute = createRoute({
  method: 'get',
  path: '/stats/frequency/word/{source_lang}/',
  tags: ['LexiStats'],
  summary: 'Retrieve the frequency of a word derived from a corpus.',
  description:
    'This endpoint provides the frequency of a given word. When multiple database records match the query parameters, the returned frequency is the sum of the individual frequencies. For example, if the query parameters are lemma=test, the returned frequency will include the verb "test", the noun "test" and the adjective "test" in all forms (Test, tested, testing, etc.) <br> <br> If you are interested in the frequency of the word "test" but want to exclude other forms (e.g., tested) use the option trueCase=test. Normally, the word "test" will be spelt with a capital letter at the beginning of a sentence. The option trueCase will ignore this and it will count "Test" and "test" as the same token. If you are interested in frequencies of "Test" and "test", use the option wordform=test or wordform=Test. Note that trueCase is not just a lower case of the word as some words are genuinely spelt with a capital letter such as the word "press" in Oxford University Press. <br> <br> Parameters can be provided in PATH, GET or POST (form or json). The parameters in PATH are overriden by parameters in GET, POST and json (in that order). In PATH, individual options are separated by semicolon and values are separated by commas (where multiple values can be used). Examples:\n* PATH: /lemma=test;lexicalCategory=noun\n* GET: /?lemma=test&lexicalCategory=noun\n* POST (json):\n\n  ```javascript\n    {\n      "lemma": "test",\n      "lexicalCategory": "noun"\n    }\n  ```\n\n<br> One of the options wordform/trueCase/lemma/lexicalCategory has to be provided.\n',
  request: {
    params: z.object({
      source_lang: z
        .string()
        .default('en')
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'source_lang',
            required: true,
            schema: { default: 'en', type: 'string' },
          },
        }),
    }),
    query: z.object({
      corpus: z
        .string()
        .default('nmc')
        .exactOptional()
        .openapi({
          param: {
            description:
              "For corpora other than 'nmc' (New Monitor Corpus) please contact api@oxforddictionaries.com",
            in: 'query',
            name: 'corpus',
            required: false,
            schema: { default: 'nmc', type: 'string' },
          },
        }),
      wordform: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The written form of the word to look up (preserving case e.g., Books vs books)',
            in: 'query',
            name: 'wordform',
            required: false,
            schema: { type: 'string' },
          },
        }),
      trueCase: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The written form of the word to look up with normalised case (Books --> books)',
            in: 'query',
            name: 'trueCase',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lemma: z
        .string()
        .default('test')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The lemma of the word to look up (e.g., Book, booked, books all have the lemma "book")',
            in: 'query',
            name: 'lemma',
            required: false,
            schema: { default: 'test', type: 'string' },
          },
        }),
      lexicalCategory: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The lexical category of the word(s) to look up (e.g., noun or verb)',
            in: 'query',
            name: 'lexicalCategory',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: {
        'application/json': { schema: StatsWordResultSchema },
        'text/csv': { schema: StatsWordResultSchema },
      },
    },
    400: {
      description:
        "You need to specify at least one option. Try one of 'wordform, lemma, trueCase, lexicalCategory'.\n",
    },
    404: { description: 'language is not in...\n' },
    500: { description: 'Internal Error. An error occurred while processing the data.\n' },
  },
})

export const getStatsFrequencyWordsSourceLangIndexRoute = createRoute({
  method: 'get',
  path: '/stats/frequency/words/{source_lang}/',
  tags: ['LexiStats'],
  summary: 'Retrieve a list of frequencies of a word/words derived from a corpus.',
  description:
    'This endpoint provides a list of frequencies for a given word or words. Unlike the /word/ endpoint, the results are split into the smallest units. <br> <br> To exclude a specific value, prepend it with the minus sign (\'-\'). For example, to get frequencies of the lemma \'happy\' but exclude superlative forms (i.e., happiest) you could use options \'lemma=happy;grammaticalFeatures=-degreeType:superlative\'. <br> <br> Parameters can be provided in PATH, GET or POST (form or json). The parameters in PATH are overridden by parameters in GET, POST and json (in that order). In PATH, individual options are separated by semicolon and values are separated by commas (where multiple values can be used). <br> <br> The parameters wordform/trueCase/lemma/lexicalCategory also exist in a plural form, taking a lists of items. Examples:\n* PATH: /wordforms=happy,happier,happiest\n* GET: /?wordforms=happy&wordforms=happier&wordforms=happiest\n* POST (json):\n```javascript\n  {\n    "wordforms": ["happy", "happier", "happiest"]\n  }\n```\nA mor complex example of retrieving frequencies of multiple lemmas:\n```\n  {\n      "lemmas": ["happy", "content", "cheerful", "cheery", "merry", "joyful", "ecstatic"],\n      "grammaticalFeatures": {\n          "adjectiveFunctionType": "predicative"\n      },\n      "lexicalCategory": "adjective",\n      "sort": ["lemma", "-frequency"]\n  }\n```\nSome queries with "collate" or "sort" can exceed the 30s timeout, in which case the API will return an error message with status code 503. You mitigate this by providing additional restrictions such as "minFrequency" and "maxFrequency". <br> <br> You can use the parameters "offset" and "limit" to paginate through large result sets. For convenience, the HTTP header "Link" is set on the response to provide links to "first", "self", "next", "prev" and "last" pages of results (depending on the context). For example, if the result set contains 50 results and the parameter "limit" is set to 25, the Links header will contain an URL for the first 25 results and the next 25 results. <br> <br> Some libraries such as python\'s `requests` can parse the header automatically and offer a convenient way of iterating through the results. For example:\n```python def get_all_results(url):\n    while url:\n        r = requests.get(url)\n        r.raise_for_status()\n        for item in r.json()[\'results\']:\n          yield item\n        url = r.links.get(\'next\', {}).get(\'url\')\n```\n',
  request: {
    params: z.object({
      source_lang: z
        .string()
        .default('en')
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'source_lang',
            required: true,
            schema: { default: 'en', type: 'string' },
          },
        }),
    }),
    query: z.object({
      corpus: z
        .string()
        .default('nmc')
        .exactOptional()
        .openapi({
          param: {
            description:
              "For corpora other than 'nmc' (New Monitor Corpus) please contact api@oxforddictionaries.com",
            in: 'query',
            name: 'corpus',
            required: false,
            schema: { default: 'nmc', type: 'string' },
          },
        }),
      wordform: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The written form of the word to look up (preserving case e.g., Book vs book)',
            in: 'query',
            name: 'wordform',
            required: false,
            schema: { type: 'string' },
          },
        }),
      trueCase: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The written form of the word to look up with normalised case (Books --> books)',
            in: 'query',
            name: 'trueCase',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lemma: z
        .string()
        .default('test')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The lemma of the word to look up (e.g., Book, booked, books all have the lemma "book")',
            in: 'query',
            name: 'lemma',
            required: false,
            schema: { default: 'test', type: 'string' },
          },
        }),
      lexicalCategory: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The lexical category of the word(s) to look up (e.g., adjective or noun)',
            in: 'query',
            name: 'lexicalCategory',
            required: false,
            schema: { type: 'string' },
          },
        }),
      grammaticalFeatures: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The grammatical features of the word(s) to look up entered as a list of k:v (e.g., degree_type:comparative)',
            in: 'query',
            name: 'grammaticalFeatures',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "sort the resulting list by wordform, trueCase, lemma, lexicalCategory, frequency, normalizedFrequency. Descending order is achieved by prepending the value with the minus sign ('-'). Multiple values can be separated by commas (e.g., sort=lexicalCategory,-frequency)",
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
      collate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'collate the results by wordform, trueCase, lemma, lexicalCategory. Multiple values can be separated by commas (e.g., collate=trueCase,lemma,lexicalCategory).',
            in: 'query',
            name: 'collate',
            required: false,
            schema: { type: 'string' },
          },
        }),
      minFrequency: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict the query to entries with frequency of at least `minFrequency`',
            in: 'query',
            name: 'minFrequency',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      maxFrequency: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict the query to entries with frequency of at most `maxFrequency`',
            in: 'query',
            name: 'maxFrequency',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      minNormalizedFrequency: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restrict the query to entries with frequency of at least `minNormalizedFrequency`',
            in: 'query',
            name: 'minNormalizedFrequency',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      maxNormalizedFrequency: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restrict the query to entries with frequency of at most `maxNormalizedFrequency`',
            in: 'query',
            name: 'maxNormalizedFrequency',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            description: 'pagination - results offset',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int64', type: 'integer' },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(100n)
        .exactOptional()
        .openapi({
          param: {
            description: 'pagination - results limit',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 100, format: 'int64', type: 'integer' },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: {
        'application/json': { schema: StatsWordResultListSchema },
        'text/csv': { schema: StatsWordResultListSchema },
      },
    },
    400: {
      description:
        "Invalid option name...; Option ... must have a value.; The option 'minFrequency' has to have an non-negative integer parameter.; The option 'maxFrequency' has to have an non-negative integer parameter.; The option 'limit' has to have an non-negative integer parameter.; The option 'offset' has to have an non-negative integer parameter.",
    },
    404: { description: 'language is not in...\n' },
    500: { description: 'Internal Error. An error occurred while processing the data.\n' },
  },
})

export const getWordlistSourceLangFiltersAdvancedRoute = createRoute({
  method: 'get',
  path: '/wordlist/{source_lang}/{filters_advanced}',
  tags: ['Wordlist'],
  summary: 'Retrieve list of words for category with advanced options',
  description:
    'Use this to apply more complex filters to the [list of words](documentation/glossary?term=wordlist). For example, you may only want to filter out words for which all [senses](documentation/glossary?term=sense) match the filter, or only its \'prime sense\'. You can also filter by word length or match by substring (prefix). \n\n  <div id="wordlist_advanced"></div>\n',
  request: {
    params: z.object({
      source_lang: z
        .enum(['en', 'es', 'hi', 'lv', 'sw', 'ta', 'gu'])
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'source_lang',
            required: true,
            schema: { enum: ['en', 'es', 'hi', 'lv', 'sw', 'ta', 'gu'], type: 'string' },
          },
        }),
      filters_advanced: z
        .string()
        .default('lexicalCategory=Noun;domains=sport')
        .openapi({
          param: {
            description:
              'Semicolon separated list of wordlist parameters, presented as value pairs: LexicalCategory, domains, regions, registers. Parameters can take comma separated list of values. E.g., lexicalCategory=noun,adjective;domains=sport. Number of values limited to 5.',
            in: 'path',
            name: 'filters_advanced',
            required: true,
            schema: { default: 'lexicalCategory=Noun;domains=sport', type: 'string' },
          },
        }),
    }),
    query: z.object({
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Semicolon separated list of parameters-value pairs (same as filters). Excludes headwords that have any senses in specified exclusion attributes (lexical categories, domains, etc.) from results.',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude_senses: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Semicolon separated list of parameters-value pairs (same as filters). Excludes only those senses of a particular headword that match specified exclusion attributes (lexical categories, domains, etc.) from results but includes the headword if it has other permitted senses.',
            in: 'query',
            name: 'exclude_senses',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude_prime_senses: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Semicolon separated list of parameters-value pairs (same as filters). Excludes a headword only if the primary sense matches the specified exclusion attributes (registers, domains only).',
            in: 'query',
            name: 'exclude_prime_senses',
            required: false,
            schema: { type: 'string' },
          },
        }),
      word_length: z
        .string()
        .default('>5,<10')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Parameter to speficy the minimum (>), exact or maximum (<) length of the words required. E.g., >5 - more than 5 chars; <4 - less than 4 chars; >5<10 - from 5 to 10 chars; 3 - exactly 3 chars.',
            in: 'query',
            name: 'word_length',
            required: false,
            schema: { default: '>5,<10', type: 'string' },
          },
        }),
      prefix: z
        .string()
        .default('goal')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter words that start with prefix parameter',
            in: 'query',
            name: 'prefix',
            required: false,
            schema: { default: 'goal', type: 'string' },
          },
        }),
      exact: z
        .union([z.literal('false'), z.literal('true')])
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If exact=true wordlist returns a list of entries that exactly matches the search string. Otherwise wordlist lists entries that start with prefix string.',
            in: 'query',
            name: 'exact',
            required: false,
            schema: { default: 'false', enum: ['false', 'true'], type: 'boolean' },
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the number of results per response. Default and maximum limit is 5000.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Offset the start number of the result.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: WordlistSchema } },
    },
    400: {
      description:
        'disjoint sets of word_length values (eg <3>10); filter has no values; total number of filters > 20; filters and excludes values can not be the same; source_lang and translations can not be same; word_length conflicts with prefix length.',
    },
    404: {
      description:
        'No entries is found matching supplied filters or lang or filters is not recognized.\n',
    },
    500: { description: 'Internal Error. An error occurred while processing the data.\n' },
  },
})

export const getWordlistSourceLangFiltersBasicRoute = createRoute({
  method: 'get',
  path: '/wordlist/{source_lang}/{filters_basic}',
  tags: ['Wordlist'],
  summary: 'Retrieve a list of words in a category',
  description:
    '\nUse this to retrieve a [list of words](documentation/glossary?term=wordlist) for particular [domain](documentation/glossary?term=domain), [lexical category](documentation/glossary?term=lexicalcategory), [register](documentation/glossary?term=registers) and/or [region](documentation/glossary?term=regions). View the full list of possible filters using the filters Utility endpoint.  The response only includes [headwords](documentation/glossary?term=headword), not all their possible [inflections](documentation/glossary?term=inflection). If you require a full [wordlist](documentation/glossary?term=wordlist) including [inflected forms](documentation/glossary?term=inflection), contact us and we can help.\n\n  <div id="wordlist"></div>\n',
  request: {
    params: z.object({
      source_lang: z
        .enum(['en', 'es', 'hi', 'lv', 'sw', 'ta', 'gu'])
        .openapi({
          param: {
            description: 'IANA language code',
            in: 'path',
            name: 'source_lang',
            required: true,
            schema: { enum: ['en', 'es', 'hi', 'lv', 'sw', 'ta', 'gu'], type: 'string' },
          },
        }),
      filters_basic: z
        .string()
        .default('registers=Rare;domains=Art')
        .openapi({
          param: {
            description:
              'Semicolon separated list of wordlist parameters, presented as value pairs: LexicalCategory, domains, regions, registers. Parameters can take comma separated list of values. E.g., lexicalCategory=noun,adjective;domains=sport. Number of values limited to 5.',
            in: 'path',
            name: 'filters_basic',
            required: true,
            schema: { default: 'registers=Rare;domains=Art', type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the number of results per response. Default and maximum limit is 5000.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Offset the start number of the result',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ app_id: AppIdParamsSchema, app_key: AppKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: WordlistSchema } },
    },
    400: { description: 'filter has no values; total number of filters > 20.' },
    404: {
      description:
        'No entries is found matching supplied filters or lang or filters is not recognized.\n',
    },
    500: { description: 'Internal Error. An error occurred while processing the data.\n' },
  },
})
