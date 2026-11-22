type UtilityLabels = {
  metadata?: { [x: string]: unknown } | undefined
  results?: { [x: string]: { en?: string | undefined } } | undefined
}
type GrammaticalFeaturesList = { text: string; type: string }[]
type Arrayofstrings = string[]
type CategorizedTextList = { id?: string | undefined; text: string; type: string }[]
type TranslationsList = {
  domains?: Arrayofstrings | undefined
  grammaticalFeatures?: GrammaticalFeaturesList | undefined
  language: string
  notes?: CategorizedTextList | undefined
  regions?: Arrayofstrings | undefined
  registers?: Arrayofstrings | undefined
  text: string
}[]
type ExamplesList = {
  definitions?: Arrayofstrings | undefined
  domains?: Arrayofstrings | undefined
  notes?: CategorizedTextList | undefined
  regions?: Arrayofstrings | undefined
  registers?: Arrayofstrings | undefined
  senseIds?: Arrayofstrings | undefined
  text: string
  translations?: TranslationsList | undefined
}[]
type SentencesLexicalEntry = {
  grammaticalFeatures?: GrammaticalFeaturesList | undefined
  language: string
  lexicalCategory?: string | undefined
  sentences: ExamplesList
  text: string
}
type SentencesEntry = {
  id: string
  language: string
  lexicalEntries: SentencesLexicalEntry[]
  type?: string | undefined
  word: string
}
type SentencesResults = {
  metadata?: { [x: string]: unknown } | undefined
  results?: SentencesEntry[] | undefined
}
type ArrayOfRelatedEntries = {
  domains?: Arrayofstrings | undefined
  id: string
  language?: string | undefined
  regions?: Arrayofstrings | undefined
  registers?: Arrayofstrings | undefined
  text: string
}[]
type PronunciationsList = {
  audioFile?: string | undefined
  dialects?: Arrayofstrings | undefined
  phoneticNotation?: string | undefined
  phoneticSpelling?: string | undefined
  regions?: Arrayofstrings | undefined
}[]
type CrossReferencesList = { id: string; text: string; type: string }[]
type ThesaurusLink = { entry_id: string; sense_id: string }
type VariantFormsList = { regions?: Arrayofstrings | undefined; text: string }[]
type Sense = {
  crossReferenceMarkers?: Arrayofstrings | undefined
  crossReferences?: CrossReferencesList | undefined
  definitions?: Arrayofstrings | undefined
  domains?: Arrayofstrings | undefined
  examples?: ExamplesList | undefined
  id?: string | undefined
  notes?: CategorizedTextList | undefined
  pronunciations?: PronunciationsList | undefined
  regions?: Arrayofstrings | undefined
  registers?: Arrayofstrings | undefined
  short_definitions?: Arrayofstrings | undefined
  subsenses?: Sense[] | undefined
  thesaurusLinks?: ThesaurusLink[] | undefined
  translations?: TranslationsList | undefined
  variantForms?: VariantFormsList | undefined
}
type Entry = {
  etymologies?: Arrayofstrings | undefined
  grammaticalFeatures?: GrammaticalFeaturesList | undefined
  homographNumber?: string | undefined
  notes?: CategorizedTextList | undefined
  pronunciations?: PronunciationsList | undefined
  senses?: Sense[] | undefined
  variantForms?: VariantFormsList | undefined
}
type LexicalEntry = {
  derivativeOf?: ArrayOfRelatedEntries | undefined
  derivatives?: ArrayOfRelatedEntries | undefined
  entries?: Entry[] | undefined
  grammaticalFeatures?: GrammaticalFeaturesList | undefined
  language: string
  lexicalCategory: string
  notes?: CategorizedTextList | undefined
  pronunciations?: PronunciationsList | undefined
  text: string
  variantForms?: VariantFormsList | undefined
}
type HeadwordEntry = {
  id: string
  language: string
  lexicalEntries: LexicalEntry[]
  pronunciations?: PronunciationsList | undefined
  type?: string | undefined
  word: string
}
type RetrieveEntry = {
  metadata?: { [x: string]: unknown } | undefined
  results?: HeadwordEntry[] | undefined
}
type SynonymsAntonyms = {
  domains?: Arrayofstrings | undefined
  id: string
  language?: string | undefined
  regions?: Arrayofstrings | undefined
  registers?: Arrayofstrings | undefined
  text: string
}[]
type ThesaurusSense = {
  antonyms?: SynonymsAntonyms | undefined
  domains?: Arrayofstrings | undefined
  examples?: ExamplesList | undefined
  id?: string | undefined
  regions?: Arrayofstrings | undefined
  registers?: Arrayofstrings | undefined
  subsenses?: ThesaurusSense[] | undefined
  synonyms?: SynonymsAntonyms | undefined
}
type ThesaurusEntry = {
  homographNumber?: string | undefined
  senses?: ThesaurusSense[] | undefined
  variantForms?: VariantFormsList | undefined
}
type ThesaurusLexicalEntry = {
  entries?: ThesaurusEntry[] | undefined
  language: string
  lexicalCategory: string
  text: string
  variantForms?: VariantFormsList | undefined
}
type HeadwordThesaurus = {
  id: string
  language: string
  lexicalEntries: ThesaurusLexicalEntry[]
  type?: string | undefined
  word: string
}
type Thesaurus = {
  metadata?: { [x: string]: unknown } | undefined
  results?: HeadwordThesaurus[] | undefined
}
type Filters = {
  metadata?: { [x: string]: unknown } | undefined
  results?:
    | {
        entries?: Arrayofstrings | undefined
        inflections?: Arrayofstrings | undefined
        translations?: Arrayofstrings | undefined
        wordlist?: Arrayofstrings | undefined
      }
    | undefined
}
type InflectionsList = { id: string; text: string }[]
type LemmatronLexicalEntry = {
  grammaticalFeatures?: GrammaticalFeaturesList | undefined
  inflectionOf: InflectionsList
  language: string
  lexicalCategory: string
  text: string
}
type HeadwordLemmatron = {
  id: string
  language: string
  lexicalEntries: LemmatronLexicalEntry[]
  type?: string | undefined
  word: string
}
type Lemmatron = {
  metadata?: { [x: string]: unknown } | undefined
  results?: HeadwordLemmatron[] | undefined
}
type Languages = {
  metadata?: { [x: string]: unknown } | undefined
  results?:
    | {
        region?: string | undefined
        source?: string | undefined
        sourceLanguage?: { id?: string | undefined; language?: string | undefined } | undefined
        targetLanguage?: { id?: string | undefined; language?: string | undefined } | undefined
        type?: 'monolingual' | 'bilingual' | undefined
      }[]
    | undefined
}
type Regions = {
  metadata?: { [x: string]: unknown } | undefined
  results?: { [x: string]: Arrayofstrings } | undefined
}
type Wordlist = {
  metadata?: { [x: string]: unknown } | undefined
  results?:
    | {
        id: string
        matchString?: (string | null) | undefined
        matchType?: string | undefined
        region?: string | undefined
        word: string
      }[]
    | undefined
}
type NgramsResult = {
  metadata?: { [x: string]: unknown } | undefined
  results?: { frequency: number; tokens: string[] }[] | undefined
}
type StatsWordResult = {
  metadata?: { [x: string]: unknown } | undefined
  result?:
    | {
        frequency: number
        lemma?: string | undefined
        lexicalCategory?: string | undefined
        matchCount: number
        normalizedFrequency: number
        trueCase?: string | undefined
        wordform?: string | undefined
      }
    | undefined
}
type StatsWordResultList = {
  metadata?: { [x: string]: unknown } | undefined
  results?:
    | {
        frequency: number
        lemma: string
        lexicalCategory: string
        normalizedFrequency: number
        trueCase: string
        wordform: string
      }[]
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/domains/:source_domains_language/:target_domains_language': {
      $get:
        | {
            input: {
              param: {
                source_domains_language: 'en' | 'es' | 'nso' | 'zu' | 'ur' | 'de' | 'pt'
                target_domains_language:
                  | 'es'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ro'
                  | 'de'
                  | 'pt'
              }
            } & { header: { app_id: string; app_key: string } }
            output: UtilityLabels
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                source_domains_language: 'en' | 'es' | 'nso' | 'zu' | 'ur' | 'de' | 'pt'
                target_domains_language:
                  | 'es'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ro'
                  | 'de'
                  | 'pt'
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                source_domains_language: 'en' | 'es' | 'nso' | 'zu' | 'ur' | 'de' | 'pt'
                target_domains_language:
                  | 'es'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ro'
                  | 'de'
                  | 'pt'
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/domains/:source_language': {
      $get:
        | {
            input: {
              param: {
                source_language:
                  | 'en'
                  | 'es'
                  | 'nso'
                  | 'zu'
                  | 'hi'
                  | 'sw'
                  | 'ur'
                  | 'de'
                  | 'pt'
                  | 'ta'
                  | 'gu'
              }
            } & { header: { app_id: string; app_key: string } }
            output: UtilityLabels
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                source_language:
                  | 'en'
                  | 'es'
                  | 'nso'
                  | 'zu'
                  | 'hi'
                  | 'sw'
                  | 'ur'
                  | 'de'
                  | 'pt'
                  | 'ta'
                  | 'gu'
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/entries/:source_language/:word_id/sentences': {
      $get:
        | {
            input: { param: { source_language: 'en' | 'es'; word_id: string } } & {
              header: { app_id: string; app_key: string }
            }
            output: SentencesResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { source_language: 'en' | 'es'; word_id: string } } & {
              header: { app_id: string; app_key: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { source_language: 'en' | 'es'; word_id: string } } & {
              header: { app_id: string; app_key: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entries/:source_lang/:word_id': {
      $get:
        | {
            input: {
              param: {
                source_lang: 'en' | 'es' | 'lv' | 'hi' | 'sw' | 'ta' | 'gu' | 'fr'
                word_id: string
              }
            } & { header: { app_id: string; app_key: string } }
            output: RetrieveEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                source_lang: 'en' | 'es' | 'lv' | 'hi' | 'sw' | 'ta' | 'gu' | 'fr'
                word_id: string
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                source_lang: 'en' | 'es' | 'lv' | 'hi' | 'sw' | 'ta' | 'gu' | 'fr'
                word_id: string
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entries/:source_lang/:word_id/antonyms': {
      $get:
        | {
            input: { param: { source_lang: 'en'; word_id: string } } & {
              header: { app_id: string; app_key: string }
            }
            output: Thesaurus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { source_lang: 'en'; word_id: string } } & {
              header: { app_id: string; app_key: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { source_lang: 'en'; word_id: string } } & {
              header: { app_id: string; app_key: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entries/:source_lang/:word_id/regions=:region': {
      $get:
        | {
            input: { param: { source_lang: 'en'; word_id: string; region: 'gb' | 'us' } } & {
              header: { app_id: string; app_key: string }
            }
            output: RetrieveEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { source_lang: 'en'; word_id: string; region: 'gb' | 'us' } } & {
              header: { app_id: string; app_key: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { source_lang: 'en'; word_id: string; region: 'gb' | 'us' } } & {
              header: { app_id: string; app_key: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entries/:source_lang/:word_id/synonyms': {
      $get:
        | {
            input: { param: { source_lang: 'en'; word_id: string } } & {
              header: { app_id: string; app_key: string }
            }
            output: Thesaurus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { source_lang: 'en'; word_id: string } } & {
              header: { app_id: string; app_key: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { source_lang: 'en'; word_id: string } } & {
              header: { app_id: string; app_key: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entries/:source_lang/:word_id/synonyms;antonyms': {
      $get:
        | {
            input: { param: { source_lang: 'en'; word_id: string } } & {
              header: { app_id: string; app_key: string }
            }
            output: Thesaurus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { source_lang: 'en'; word_id: string } } & {
              header: { app_id: string; app_key: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { source_lang: 'en'; word_id: string } } & {
              header: { app_id: string; app_key: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entries/:source_lang/:word_id/:filters': {
      $get:
        | {
            input: {
              param: {
                source_lang: 'en' | 'es' | 'lv' | 'hi' | 'sw' | 'ta' | 'gu' | 'fr'
                word_id: string
                filters: string
              }
            } & { header: { app_id: string; app_key: string } }
            output: RetrieveEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                source_lang: 'en' | 'es' | 'lv' | 'hi' | 'sw' | 'ta' | 'gu' | 'fr'
                word_id: string
                filters: string
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                source_lang: 'en' | 'es' | 'lv' | 'hi' | 'sw' | 'ta' | 'gu' | 'fr'
                word_id: string
                filters: string
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entries/:source_translation_language/:word_id/translations=:target_translation_language': {
      $get:
        | {
            input: {
              param: {
                source_translation_language:
                  | 'en'
                  | 'es'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ur'
                  | 'de'
                  | 'pt'
                word_id: string
                target_translation_language:
                  | 'es'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ro'
                  | 'de'
                  | 'pt'
              }
            } & { header: { app_id: string; app_key: string } }
            output: RetrieveEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                source_translation_language:
                  | 'en'
                  | 'es'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ur'
                  | 'de'
                  | 'pt'
                word_id: string
                target_translation_language:
                  | 'es'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ro'
                  | 'de'
                  | 'pt'
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                source_translation_language:
                  | 'en'
                  | 'es'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ur'
                  | 'de'
                  | 'pt'
                word_id: string
                target_translation_language:
                  | 'es'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ro'
                  | 'de'
                  | 'pt'
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                source_translation_language:
                  | 'en'
                  | 'es'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ur'
                  | 'de'
                  | 'pt'
                word_id: string
                target_translation_language:
                  | 'es'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ro'
                  | 'de'
                  | 'pt'
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/filters': {
      $get:
        | {
            input: { header: { app_id: string; app_key: string } }
            output: Filters
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/filters/:endpoint': {
      $get:
        | {
            input: { param: { endpoint: 'entries' | 'inflections' | 'translations' } } & {
              header: { app_id: string; app_key: string }
            }
            output: Filters
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { endpoint: 'entries' | 'inflections' | 'translations' } } & {
              header: { app_id: string; app_key: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { endpoint: 'entries' | 'inflections' | 'translations' } } & {
              header: { app_id: string; app_key: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/grammaticalFeatures/:source_language': {
      $get:
        | {
            input: {
              param: {
                source_language:
                  | 'en'
                  | 'es'
                  | 'lv'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'tn'
                  | 'ur'
                  | 'hi'
                  | 'sw'
                  | 'de'
                  | 'pt'
                  | 'ta'
                  | 'gu'
              }
            } & { header: { app_id: string; app_key: string } }
            output: UtilityLabels
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                source_language:
                  | 'en'
                  | 'es'
                  | 'lv'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'tn'
                  | 'ur'
                  | 'hi'
                  | 'sw'
                  | 'de'
                  | 'pt'
                  | 'ta'
                  | 'gu'
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/inflections/:source_lang/:word_id/:filters': {
      $get:
        | {
            input: {
              param: {
                source_lang: 'en' | 'es' | 'hi' | 'nso' | 'tn' | 'zu' | 'de' | 'pt'
                filters: string
                word_id: string
              }
            } & { header: { app_id: string; app_key: string } }
            output: Lemmatron
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                source_lang: 'en' | 'es' | 'hi' | 'nso' | 'tn' | 'zu' | 'de' | 'pt'
                filters: string
                word_id: string
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/languages': {
      $get:
        | {
            input: {
              query: {
                sourceLanguage?:
                  | 'es'
                  | 'en'
                  | 'lv'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ur'
                  | 'hi'
                  | 'sw'
                  | 'ro'
                  | 'de'
                  | 'pt'
                  | 'ta'
                  | 'gu'
                  | undefined
                targetLanguage?:
                  | 'es'
                  | 'en'
                  | 'lv'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ur'
                  | 'hi'
                  | 'sw'
                  | 'ro'
                  | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: Languages
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sourceLanguage?:
                  | 'es'
                  | 'en'
                  | 'lv'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ur'
                  | 'hi'
                  | 'sw'
                  | 'ro'
                  | 'de'
                  | 'pt'
                  | 'ta'
                  | 'gu'
                  | undefined
                targetLanguage?:
                  | 'es'
                  | 'en'
                  | 'lv'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ur'
                  | 'hi'
                  | 'sw'
                  | 'ro'
                  | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                sourceLanguage?:
                  | 'es'
                  | 'en'
                  | 'lv'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ur'
                  | 'hi'
                  | 'sw'
                  | 'ro'
                  | 'de'
                  | 'pt'
                  | 'ta'
                  | 'gu'
                  | undefined
                targetLanguage?:
                  | 'es'
                  | 'en'
                  | 'lv'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ur'
                  | 'hi'
                  | 'sw'
                  | 'ro'
                  | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/lexicalcategories/:language': {
      $get:
        | {
            input: {
              param: {
                language:
                  | 'es'
                  | 'en'
                  | 'lv'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ur'
                  | 'hi'
                  | 'sw'
                  | 'ro'
                  | 'de'
                  | 'pt'
                  | 'ta'
                  | 'gu'
              }
            } & { header: { app_id: string; app_key: string } }
            output: UtilityLabels
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                language:
                  | 'es'
                  | 'en'
                  | 'lv'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ur'
                  | 'hi'
                  | 'sw'
                  | 'ro'
                  | 'de'
                  | 'pt'
                  | 'ta'
                  | 'gu'
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                language:
                  | 'es'
                  | 'en'
                  | 'lv'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ur'
                  | 'hi'
                  | 'sw'
                  | 'ro'
                  | 'de'
                  | 'pt'
                  | 'ta'
                  | 'gu'
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/regions/:source_language': {
      $get:
        | {
            input: { param: { source_language: 'en' } } & {
              header: { app_id: string; app_key: string }
            }
            output: Regions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { source_language: 'en' } } & {
              header: { app_id: string; app_key: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/registers/:source_language': {
      $get:
        | {
            input: {
              param: {
                source_language:
                  | 'en'
                  | 'es'
                  | 'hi'
                  | 'id'
                  | 'lv'
                  | 'ms'
                  | 'sw'
                  | 'ur'
                  | 'de'
                  | 'pt'
                  | 'ta'
                  | 'gu'
              }
            } & { header: { app_id: string; app_key: string } }
            output: UtilityLabels
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                source_language:
                  | 'en'
                  | 'es'
                  | 'hi'
                  | 'id'
                  | 'lv'
                  | 'ms'
                  | 'sw'
                  | 'ur'
                  | 'de'
                  | 'pt'
                  | 'ta'
                  | 'gu'
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                source_language:
                  | 'en'
                  | 'es'
                  | 'hi'
                  | 'id'
                  | 'lv'
                  | 'ms'
                  | 'sw'
                  | 'ur'
                  | 'de'
                  | 'pt'
                  | 'ta'
                  | 'gu'
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/registers/:source_register_language/:target_register_language': {
      $get:
        | {
            input: {
              param: {
                source_register_language: 'en' | 'es' | 'ms' | 'id' | 'ur' | 'de' | 'pt'
                target_register_language:
                  | 'es'
                  | 'en'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ro'
                  | 'de'
                  | 'pt'
              }
            } & { header: { app_id: string; app_key: string } }
            output: UtilityLabels
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                source_register_language: 'en' | 'es' | 'ms' | 'id' | 'ur' | 'de' | 'pt'
                target_register_language:
                  | 'es'
                  | 'en'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ro'
                  | 'de'
                  | 'pt'
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                source_register_language: 'en' | 'es' | 'ms' | 'id' | 'ur' | 'de' | 'pt'
                target_register_language:
                  | 'es'
                  | 'en'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ro'
                  | 'de'
                  | 'pt'
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                source_register_language: 'en' | 'es' | 'ms' | 'id' | 'ur' | 'de' | 'pt'
                target_register_language:
                  | 'es'
                  | 'en'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ro'
                  | 'de'
                  | 'pt'
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search/:source_lang': {
      $get:
        | {
            input: { param: { source_lang: 'en' | 'es' | 'hi' | 'lv' | 'sw' | 'ta' | 'gu' } } & {
              query: {
                q?: string | undefined
                prefix?: 'false' | 'true' | undefined
                regions?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: Wordlist
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { source_lang: 'en' | 'es' | 'hi' | 'lv' | 'sw' | 'ta' | 'gu' } } & {
              query: {
                q?: string | undefined
                prefix?: 'false' | 'true' | undefined
                regions?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { source_lang: 'en' | 'es' | 'hi' | 'lv' | 'sw' | 'ta' | 'gu' } } & {
              query: {
                q?: string | undefined
                prefix?: 'false' | 'true' | undefined
                regions?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search/:source_search_language/translations=:target_search_language': {
      $get:
        | {
            input: {
              param: {
                source_search_language:
                  | 'en'
                  | 'es'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ur'
                  | 'de'
                  | 'pt'
                target_search_language:
                  | 'es'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ro'
                  | 'de'
                  | 'pt'
              }
            } & {
              query: {
                q?: string | undefined
                prefix?: 'false' | 'true' | undefined
                regions?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: Wordlist
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                source_search_language:
                  | 'en'
                  | 'es'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ur'
                  | 'de'
                  | 'pt'
                target_search_language:
                  | 'es'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ro'
                  | 'de'
                  | 'pt'
              }
            } & {
              query: {
                q?: string | undefined
                prefix?: 'false' | 'true' | undefined
                regions?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                source_search_language:
                  | 'en'
                  | 'es'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ur'
                  | 'de'
                  | 'pt'
                target_search_language:
                  | 'es'
                  | 'nso'
                  | 'zu'
                  | 'ms'
                  | 'id'
                  | 'tn'
                  | 'ro'
                  | 'de'
                  | 'pt'
              }
            } & {
              query: {
                q?: string | undefined
                prefix?: 'false' | 'true' | undefined
                regions?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/stats/frequency/ngrams/:source_lang/:corpus/:ngram-size/': {
      $get:
        | {
            input: { param: { source_lang: string; corpus: string; 'ngram-size': string } } & {
              query: {
                tokens?: string | undefined
                contains?: string | undefined
                punctuation?: string | undefined
                format?: string | undefined
                minFrequency?: bigint | undefined
                maxFrequency?: bigint | undefined
                minDocumentFrequency?: bigint | undefined
                maxDocumentFrequency?: bigint | undefined
                collate?: string | undefined
                sort?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: NgramsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { source_lang: string; corpus: string; 'ngram-size': string } } & {
              query: {
                tokens?: string | undefined
                contains?: string | undefined
                punctuation?: string | undefined
                format?: string | undefined
                minFrequency?: bigint | undefined
                maxFrequency?: bigint | undefined
                minDocumentFrequency?: bigint | undefined
                maxDocumentFrequency?: bigint | undefined
                collate?: string | undefined
                sort?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: NgramsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { source_lang: string; corpus: string; 'ngram-size': string } } & {
              query: {
                tokens?: string | undefined
                contains?: string | undefined
                punctuation?: string | undefined
                format?: string | undefined
                minFrequency?: bigint | undefined
                maxFrequency?: bigint | undefined
                minDocumentFrequency?: bigint | undefined
                maxDocumentFrequency?: bigint | undefined
                collate?: string | undefined
                sort?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { source_lang: string; corpus: string; 'ngram-size': string } } & {
              query: {
                tokens?: string | undefined
                contains?: string | undefined
                punctuation?: string | undefined
                format?: string | undefined
                minFrequency?: bigint | undefined
                maxFrequency?: bigint | undefined
                minDocumentFrequency?: bigint | undefined
                maxDocumentFrequency?: bigint | undefined
                collate?: string | undefined
                sort?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { source_lang: string; corpus: string; 'ngram-size': string } } & {
              query: {
                tokens?: string | undefined
                contains?: string | undefined
                punctuation?: string | undefined
                format?: string | undefined
                minFrequency?: bigint | undefined
                maxFrequency?: bigint | undefined
                minDocumentFrequency?: bigint | undefined
                maxDocumentFrequency?: bigint | undefined
                collate?: string | undefined
                sort?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/stats/frequency/word/:source_lang/': {
      $get:
        | {
            input: { param: { source_lang: string } } & {
              query: {
                corpus?: string | undefined
                wordform?: string | undefined
                trueCase?: string | undefined
                lemma?: string | undefined
                lexicalCategory?: string | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: StatsWordResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { source_lang: string } } & {
              query: {
                corpus?: string | undefined
                wordform?: string | undefined
                trueCase?: string | undefined
                lemma?: string | undefined
                lexicalCategory?: string | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: StatsWordResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { source_lang: string } } & {
              query: {
                corpus?: string | undefined
                wordform?: string | undefined
                trueCase?: string | undefined
                lemma?: string | undefined
                lexicalCategory?: string | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { source_lang: string } } & {
              query: {
                corpus?: string | undefined
                wordform?: string | undefined
                trueCase?: string | undefined
                lemma?: string | undefined
                lexicalCategory?: string | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { source_lang: string } } & {
              query: {
                corpus?: string | undefined
                wordform?: string | undefined
                trueCase?: string | undefined
                lemma?: string | undefined
                lexicalCategory?: string | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/stats/frequency/words/:source_lang/': {
      $get:
        | {
            input: { param: { source_lang: string } } & {
              query: {
                corpus?: string | undefined
                wordform?: string | undefined
                trueCase?: string | undefined
                lemma?: string | undefined
                lexicalCategory?: string | undefined
                grammaticalFeatures?: string | undefined
                sort?: string | undefined
                collate?: string | undefined
                minFrequency?: bigint | undefined
                maxFrequency?: bigint | undefined
                minNormalizedFrequency?: number | undefined
                maxNormalizedFrequency?: number | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: StatsWordResultList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { source_lang: string } } & {
              query: {
                corpus?: string | undefined
                wordform?: string | undefined
                trueCase?: string | undefined
                lemma?: string | undefined
                lexicalCategory?: string | undefined
                grammaticalFeatures?: string | undefined
                sort?: string | undefined
                collate?: string | undefined
                minFrequency?: bigint | undefined
                maxFrequency?: bigint | undefined
                minNormalizedFrequency?: number | undefined
                maxNormalizedFrequency?: number | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: StatsWordResultList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { source_lang: string } } & {
              query: {
                corpus?: string | undefined
                wordform?: string | undefined
                trueCase?: string | undefined
                lemma?: string | undefined
                lexicalCategory?: string | undefined
                grammaticalFeatures?: string | undefined
                sort?: string | undefined
                collate?: string | undefined
                minFrequency?: bigint | undefined
                maxFrequency?: bigint | undefined
                minNormalizedFrequency?: number | undefined
                maxNormalizedFrequency?: number | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { source_lang: string } } & {
              query: {
                corpus?: string | undefined
                wordform?: string | undefined
                trueCase?: string | undefined
                lemma?: string | undefined
                lexicalCategory?: string | undefined
                grammaticalFeatures?: string | undefined
                sort?: string | undefined
                collate?: string | undefined
                minFrequency?: bigint | undefined
                maxFrequency?: bigint | undefined
                minNormalizedFrequency?: number | undefined
                maxNormalizedFrequency?: number | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { source_lang: string } } & {
              query: {
                corpus?: string | undefined
                wordform?: string | undefined
                trueCase?: string | undefined
                lemma?: string | undefined
                lexicalCategory?: string | undefined
                grammaticalFeatures?: string | undefined
                sort?: string | undefined
                collate?: string | undefined
                minFrequency?: bigint | undefined
                maxFrequency?: bigint | undefined
                minNormalizedFrequency?: number | undefined
                maxNormalizedFrequency?: number | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/wordlist/:source_lang/:filters_advanced': {
      $get:
        | {
            input: {
              param: {
                source_lang: 'en' | 'es' | 'hi' | 'lv' | 'sw' | 'ta' | 'gu'
                filters_advanced: string
              }
            } & {
              query: {
                exclude?: string | undefined
                exclude_senses?: string | undefined
                exclude_prime_senses?: string | undefined
                word_length?: string | undefined
                prefix?: string | undefined
                exact?: 'false' | 'true' | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: Wordlist
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                source_lang: 'en' | 'es' | 'hi' | 'lv' | 'sw' | 'ta' | 'gu'
                filters_advanced: string
              }
            } & {
              query: {
                exclude?: string | undefined
                exclude_senses?: string | undefined
                exclude_prime_senses?: string | undefined
                word_length?: string | undefined
                prefix?: string | undefined
                exact?: 'false' | 'true' | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                source_lang: 'en' | 'es' | 'hi' | 'lv' | 'sw' | 'ta' | 'gu'
                filters_advanced: string
              }
            } & {
              query: {
                exclude?: string | undefined
                exclude_senses?: string | undefined
                exclude_prime_senses?: string | undefined
                word_length?: string | undefined
                prefix?: string | undefined
                exact?: 'false' | 'true' | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                source_lang: 'en' | 'es' | 'hi' | 'lv' | 'sw' | 'ta' | 'gu'
                filters_advanced: string
              }
            } & {
              query: {
                exclude?: string | undefined
                exclude_senses?: string | undefined
                exclude_prime_senses?: string | undefined
                word_length?: string | undefined
                prefix?: string | undefined
                exact?: 'false' | 'true' | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            } & { header: { app_id: string; app_key: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/wordlist/:source_lang/:filters_basic': {
      $get:
        | {
            input: {
              param: {
                source_lang: 'en' | 'es' | 'hi' | 'lv' | 'sw' | 'ta' | 'gu'
                filters_basic: string
              }
            } & { query: { limit?: string | undefined; offset?: string | undefined } } & {
              header: { app_id: string; app_key: string }
            }
            output: Wordlist
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                source_lang: 'en' | 'es' | 'hi' | 'lv' | 'sw' | 'ta' | 'gu'
                filters_basic: string
              }
            } & { query: { limit?: string | undefined; offset?: string | undefined } } & {
              header: { app_id: string; app_key: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                source_lang: 'en' | 'es' | 'hi' | 'lv' | 'sw' | 'ta' | 'gu'
                filters_basic: string
              }
            } & { query: { limit?: string | undefined; offset?: string | undefined } } & {
              header: { app_id: string; app_key: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                source_lang: 'en' | 'es' | 'hi' | 'lv' | 'sw' | 'ta' | 'gu'
                filters_basic: string
              }
            } & { query: { limit?: string | undefined; offset?: string | undefined } } & {
              header: { app_id: string; app_key: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
