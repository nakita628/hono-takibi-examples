type AudioFile = {
  attributionText?: string | undefined
  attributionUrl?: string | undefined
  audioType?: string | undefined
  commentCount?: number | undefined
  createdAt?: string | undefined
  createdBy?: string | undefined
  description?: string | undefined
  duration?: number | undefined
  fileUrl?: string | undefined
  id: bigint
  voteAverage?: number | undefined
  voteCount?: number | undefined
  voteWeightedAverage?: number | undefined
  word?: string | undefined
}
type Definition = {
  attributionText?: string | undefined
  attributionUrl?: string | undefined
  citations?: { [x: string]: unknown }[] | undefined
  exampleUses?: { [x: string]: unknown }[] | undefined
  extendedText?: string | undefined
  labels?: { [x: string]: unknown }[] | undefined
  notes?: { [x: string]: unknown }[] | undefined
  partOfSpeech?: string | undefined
  relatedWords?: { [x: string]: unknown }[] | undefined
  score?: number | undefined
  seqString?: string | undefined
  sequence?: string | undefined
  sourceDictionary?: string | undefined
  text?: string | undefined
  textProns?: { [x: string]: unknown }[] | undefined
  word?: string | undefined
}
type ExampleSearchResults = {
  examples?: { [x: string]: unknown }[] | undefined
  facets?: { [x: string]: unknown }[] | undefined
}
type FrequencySummary = {
  frequency?: { [x: string]: unknown }[] | undefined
  frequencyString?: string | undefined
  totalCount?: bigint | undefined
  unknownYearCount?: number | undefined
  word?: string | undefined
}
type Syllable = { seq?: number | undefined; text?: string | undefined; type?: string | undefined }
type Bigram = {
  count?: bigint | undefined
  gram1?: string | undefined
  gram2?: string | undefined
  mi?: number | undefined
  wlmi?: number | undefined
}
type TextPron = { raw?: string | undefined; rawType?: string | undefined; seq?: number | undefined }
type Related = {
  gram?: string | undefined
  label1?: string | undefined
  label2?: string | undefined
  label3?: string | undefined
  label4?: string | undefined
  relationshipType?: string | undefined
  words?: string[] | undefined
}
type ContentProvider = { id?: number | undefined; name?: string | undefined }
type ScoredWord = {
  baseWordScore?: number | undefined
  docTermCount?: number | undefined
  id?: bigint | undefined
  lemma?: string | undefined
  partOfSpeech?: string | undefined
  position?: number | undefined
  score?: number | undefined
  sentenceId?: bigint | undefined
  stopword?: boolean | undefined
  word?: string | undefined
  wordType?: string | undefined
}
type Sentence = {
  display?: string | undefined
  documentMetadataId?: bigint | undefined
  hasScoredWords?: boolean | undefined
  id?: bigint | undefined
  rating?: number | undefined
  scoredWords?: { [x: string]: unknown }[] | undefined
}
type Example = {
  documentId?: bigint | undefined
  exampleId?: bigint | undefined
  id?: bigint | undefined
  provider?: ContentProvider | undefined
  rating?: number | undefined
  score?: ScoredWord | undefined
  sentence?: Sentence | undefined
  text?: string | undefined
  title?: string | undefined
  url?: string | undefined
  word?: string | undefined
  year?: number | undefined
}
type WordObject = {
  canonicalForm?: string | undefined
  id: bigint
  originalWord?: string | undefined
  suggestions?: string[] | undefined
  vulgar?: string | undefined
  word?: string | undefined
}
type DefinitionSearchResults = {
  results?: { [x: string]: unknown }[] | undefined
  totalResults?: number | undefined
}
type WordSearchResults = {
  searchResults?: { [x: string]: unknown }[] | undefined
  totalResults?: number | undefined
}
type WordOfTheDay = {
  category?: string | undefined
  contentProvider?: ContentProvider | undefined
  createdAt?: string | undefined
  createdBy?: string | undefined
  definitions?: { [x: string]: unknown }[] | undefined
  examples?: { [x: string]: unknown }[] | undefined
  htmlExtra?: string | undefined
  id: bigint
  note?: string | undefined
  parentId?: string | undefined
  publishDate?: string | undefined
  word?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/word.json/:word/audio': {
      $get: {
        input: { param: { word: string } } & {
          query: { useCanonical?: 'false' | 'true' | undefined; limit?: number | undefined }
        }
        output: AudioFile[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/word.json/:word/definitions': {
      $get: {
        input: { param: { word: string } } & {
          query: {
            limit?: number | undefined
            partOfSpeech?:
              | 'noun'
              | 'adjective'
              | 'verb'
              | 'adverb'
              | 'interjection'
              | 'pronoun'
              | 'preposition'
              | 'abbreviation'
              | 'affix'
              | 'article'
              | 'auxiliary-verb'
              | 'conjunction'
              | 'definite-article'
              | 'family-name'
              | 'given-name'
              | 'idiom'
              | 'imperative'
              | 'noun-plural'
              | 'noun-posessive'
              | 'past-participle'
              | 'phrasal-prefix'
              | 'proper-noun'
              | 'proper-noun-plural'
              | 'proper-noun-posessive'
              | 'suffix'
              | 'verb-intransitive'
              | 'verb-transitive'
              | undefined
            includeRelated?: string | undefined
            sourceDictionaries?:
              | 'all'
              | 'ahd-5'
              | 'century'
              | 'wiktionary'
              | 'webster'
              | 'wordnet'
              | undefined
            useCanonical?: 'false' | 'true' | undefined
            includeTags?: 'false' | 'true' | undefined
          }
        }
        output: Definition[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/word.json/:word/etymologies': {
      $get: {
        input: { param: { word: string } } & {
          query: { useCanonical?: 'false' | 'true' | undefined }
        }
        output: string[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/word.json/:word/examples': {
      $get: {
        input: { param: { word: string } } & {
          query: {
            includeDuplicates?: 'false' | 'true' | undefined
            useCanonical?: 'false' | 'true' | undefined
            skip?: number | undefined
            limit?: number | undefined
          }
        }
        output: ExampleSearchResults
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/word.json/:word/frequency': {
      $get: {
        input: { param: { word: string } } & {
          query: {
            useCanonical?: 'false' | 'true' | undefined
            startYear?: number | undefined
            endYear?: number | undefined
          }
        }
        output: FrequencySummary
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/word.json/:word/hyphenation': {
      $get: {
        input: { param: { word: string } } & {
          query: {
            useCanonical?: 'false' | 'true' | undefined
            sourceDictionary?:
              | 'ahd-5'
              | 'century'
              | 'wiktionary'
              | 'webster'
              | 'wordnet'
              | undefined
            limit?: number | undefined
          }
        }
        output: Syllable[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/word.json/:word/phrases': {
      $get: {
        input: { param: { word: string } } & {
          query: {
            limit?: number | undefined
            wlmi?: number | undefined
            useCanonical?: 'false' | 'true' | undefined
          }
        }
        output: Bigram[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/word.json/:word/pronunciations': {
      $get: {
        input: { param: { word: string } } & {
          query: {
            useCanonical?: 'false' | 'true' | undefined
            sourceDictionary?:
              | 'ahd-5'
              | 'century'
              | 'cmu'
              | 'macmillan'
              | 'wiktionary'
              | 'webster'
              | 'wordnet'
              | undefined
            typeFormat?: 'ahd-5' | 'arpabet' | 'gcide-diacritical' | 'IPA' | undefined
            limit?: number | undefined
          }
        }
        output: TextPron[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/word.json/:word/relatedWords': {
      $get: {
        input: { param: { word: string } } & {
          query: {
            useCanonical?: 'false' | 'true' | undefined
            relationshipTypes?:
              | 'synonym'
              | 'antonym'
              | 'variant'
              | 'equivalent'
              | 'cross-reference'
              | 'related-word'
              | 'rhyme'
              | 'form'
              | 'etymologically-related-term'
              | 'hypernym'
              | 'hyponym'
              | 'inflected-form'
              | 'primary'
              | 'same-context'
              | 'verb-form'
              | 'verb-stem'
              | 'has_topic'
              | undefined
            limitPerRelationshipType?: number | undefined
          }
        }
        output: Related[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/word.json/:word/scrabbleScore': {
      $get: {
        input: { param: { word: string } }
        output: bigint
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/word.json/:word/topExample': {
      $get: {
        input: { param: { word: string } } & {
          query: { useCanonical?: 'false' | 'true' | undefined }
        }
        output: Example
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/words.json/randomWord': {
      $get: {
        input: {
          query: {
            hasDictionaryDef?: string | undefined
            includePartOfSpeech?: string | undefined
            excludePartOfSpeech?: string | undefined
            minCorpusCount?: number | undefined
            maxCorpusCount?: number | undefined
            minDictionaryCount?: number | undefined
            maxDictionaryCount?: number | undefined
            minLength?: number | undefined
            maxLength?: number | undefined
          }
        }
        output: WordObject
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/words.json/randomWords': {
      $get: {
        input: {
          query: {
            hasDictionaryDef?: string | undefined
            includePartOfSpeech?: string | undefined
            excludePartOfSpeech?: string | undefined
            minCorpusCount?: number | undefined
            maxCorpusCount?: number | undefined
            minDictionaryCount?: number | undefined
            maxDictionaryCount?: number | undefined
            minLength?: number | undefined
            maxLength?: number | undefined
            sortBy?: 'alpha' | 'count' | undefined
            sortOrder?: 'asc' | 'desc' | undefined
            limit?: number | undefined
          }
        }
        output: WordObject[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/words.json/reverseDictionary': {
      $get: {
        input: {
          query: {
            query: string
            findSenseForWord?: string | undefined
            includeSourceDictionaries?:
              | 'ahd-5'
              | 'century'
              | 'cmu'
              | 'macmillan'
              | 'wiktionary'
              | 'webster'
              | 'wordnet'
              | undefined
            excludeSourceDictionaries?:
              | 'ahd-5'
              | 'century'
              | 'cmu'
              | 'macmillan'
              | 'wiktionary'
              | 'webster'
              | 'wordnet'
              | undefined
            includePartOfSpeech?: string | undefined
            excludePartOfSpeech?: string | undefined
            minCorpusCount?: number | undefined
            maxCorpusCount?: number | undefined
            minLength?: number | undefined
            maxLength?: number | undefined
            expandTerms?: string | undefined
            includeTags?: 'false' | 'true' | undefined
            sortBy?: 'alpha' | 'count' | undefined
            sortOrder?: 'asc' | 'desc' | undefined
            skip?: string | undefined
            limit?: number | undefined
          }
        }
        output: DefinitionSearchResults
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/words.json/search/:query': {
      $get: {
        input: { param: { query: string } } & {
          query: {
            allowRegex?: string | undefined
            caseSensitive?: string | undefined
            includePartOfSpeech?: string | undefined
            excludePartOfSpeech?: string | undefined
            minCorpusCount?: number | undefined
            maxCorpusCount?: number | undefined
            minDictionaryCount?: number | undefined
            maxDictionaryCount?: number | undefined
            minLength?: number | undefined
            maxLength?: number | undefined
            skip?: number | undefined
            limit?: number | undefined
          }
        }
        output: WordSearchResults
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/words.json/wordOfTheDay': {
      $get: {
        input: { query: { date?: string | undefined } }
        output: WordOfTheDay
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
