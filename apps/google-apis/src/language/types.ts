type Document = {
  content?: string | undefined
  gcsContentUri?: string | undefined
  language?: string | undefined
  type?: 'TYPE_UNSPECIFIED' | 'PLAIN_TEXT' | 'HTML' | undefined
}
type AnalyzeEntitiesRequest = {
  document?: Document | undefined
  encodingType?: 'NONE' | 'UTF8' | 'UTF16' | 'UTF32' | undefined
}
type TextSpan = { beginOffset?: number | undefined; content?: string | undefined }
type EntityMention = {
  text?: TextSpan | undefined
  type?: 'TYPE_UNKNOWN' | 'PROPER' | 'COMMON' | undefined
}
type Entity = {
  mentions?: EntityMention[] | undefined
  metadata?: { [x: string]: string } | undefined
  name?: string | undefined
  salience?: number | undefined
  type?:
    | 'UNKNOWN'
    | 'PERSON'
    | 'LOCATION'
    | 'ORGANIZATION'
    | 'EVENT'
    | 'WORK_OF_ART'
    | 'CONSUMER_GOOD'
    | 'OTHER'
    | undefined
}
type AnalyzeEntitiesResponse = { entities?: Entity[] | undefined; language?: string | undefined }
type AnalyzeSentimentRequest = {
  document?: Document | undefined
  encodingType?: 'NONE' | 'UTF8' | 'UTF16' | 'UTF32' | undefined
}
type Sentiment = {
  magnitude?: number | undefined
  polarity?: number | undefined
  score?: number | undefined
}
type Sentence = { sentiment?: Sentiment | undefined; text?: TextSpan | undefined }
type AnalyzeSentimentResponse = {
  documentSentiment?: Sentiment | undefined
  language?: string | undefined
  sentences?: Sentence[] | undefined
}
type AnalyzeSyntaxRequest = {
  document?: Document | undefined
  encodingType?: 'NONE' | 'UTF8' | 'UTF16' | 'UTF32' | undefined
}
type DependencyEdge = {
  headTokenIndex?: number | undefined
  label?:
    | 'UNKNOWN'
    | 'ABBREV'
    | 'ACOMP'
    | 'ADVCL'
    | 'ADVMOD'
    | 'AMOD'
    | 'APPOS'
    | 'ATTR'
    | 'AUX'
    | 'AUXPASS'
    | 'CC'
    | 'CCOMP'
    | 'CONJ'
    | 'CSUBJ'
    | 'CSUBJPASS'
    | 'DEP'
    | 'DET'
    | 'DISCOURSE'
    | 'DOBJ'
    | 'EXPL'
    | 'GOESWITH'
    | 'IOBJ'
    | 'MARK'
    | 'MWE'
    | 'MWV'
    | 'NEG'
    | 'NN'
    | 'NPADVMOD'
    | 'NSUBJ'
    | 'NSUBJPASS'
    | 'NUM'
    | 'NUMBER'
    | 'P'
    | 'PARATAXIS'
    | 'PARTMOD'
    | 'PCOMP'
    | 'POBJ'
    | 'POSS'
    | 'POSTNEG'
    | 'PRECOMP'
    | 'PRECONJ'
    | 'PREDET'
    | 'PREF'
    | 'PREP'
    | 'PRONL'
    | 'PRT'
    | 'PS'
    | 'QUANTMOD'
    | 'RCMOD'
    | 'RCMODREL'
    | 'RDROP'
    | 'REF'
    | 'REMNANT'
    | 'REPARANDUM'
    | 'ROOT'
    | 'SNUM'
    | 'SUFF'
    | 'TMOD'
    | 'TOPIC'
    | 'VMOD'
    | 'VOCATIVE'
    | 'XCOMP'
    | 'SUFFIX'
    | 'TITLE'
    | 'ADVPHMOD'
    | 'AUXCAUS'
    | 'AUXVV'
    | 'DTMOD'
    | 'FOREIGN'
    | 'KW'
    | 'LIST'
    | 'NOMC'
    | 'NOMCSUBJ'
    | 'NOMCSUBJPASS'
    | 'NUMC'
    | 'COP'
    | 'DISLOCATED'
    | 'ASP'
    | 'GMOD'
    | 'GOBJ'
    | 'INFMOD'
    | 'MES'
    | 'NCOMP'
    | undefined
}
type PartOfSpeech = {
  aspect?: 'ASPECT_UNKNOWN' | 'PERFECTIVE' | 'IMPERFECTIVE' | 'PROGRESSIVE' | undefined
  case?:
    | 'CASE_UNKNOWN'
    | 'ACCUSATIVE'
    | 'ADVERBIAL'
    | 'COMPLEMENTIVE'
    | 'DATIVE'
    | 'GENITIVE'
    | 'INSTRUMENTAL'
    | 'LOCATIVE'
    | 'NOMINATIVE'
    | 'OBLIQUE'
    | 'PARTITIVE'
    | 'PREPOSITIONAL'
    | 'REFLEXIVE_CASE'
    | 'RELATIVE_CASE'
    | 'VOCATIVE'
    | undefined
  form?:
    | 'FORM_UNKNOWN'
    | 'ADNOMIAL'
    | 'AUXILIARY'
    | 'COMPLEMENTIZER'
    | 'FINAL_ENDING'
    | 'GERUND'
    | 'REALIS'
    | 'IRREALIS'
    | 'SHORT'
    | 'LONG'
    | 'ORDER'
    | 'SPECIFIC'
    | undefined
  gender?: 'GENDER_UNKNOWN' | 'FEMININE' | 'MASCULINE' | 'NEUTER' | undefined
  mood?:
    | 'MOOD_UNKNOWN'
    | 'CONDITIONAL_MOOD'
    | 'IMPERATIVE'
    | 'INDICATIVE'
    | 'INTERROGATIVE'
    | 'JUSSIVE'
    | 'SUBJUNCTIVE'
    | undefined
  number?: 'NUMBER_UNKNOWN' | 'SINGULAR' | 'PLURAL' | 'DUAL' | undefined
  person?: 'PERSON_UNKNOWN' | 'FIRST' | 'SECOND' | 'THIRD' | 'REFLEXIVE_PERSON' | undefined
  proper?: 'PROPER_UNKNOWN' | 'PROPER' | 'NOT_PROPER' | undefined
  reciprocity?: 'RECIPROCITY_UNKNOWN' | 'RECIPROCAL' | 'NON_RECIPROCAL' | undefined
  tag?:
    | 'UNKNOWN'
    | 'ADJ'
    | 'ADP'
    | 'ADV'
    | 'CONJ'
    | 'DET'
    | 'NOUN'
    | 'NUM'
    | 'PRON'
    | 'PRT'
    | 'PUNCT'
    | 'VERB'
    | 'X'
    | 'AFFIX'
    | undefined
  tense?:
    | 'TENSE_UNKNOWN'
    | 'CONDITIONAL_TENSE'
    | 'FUTURE'
    | 'PAST'
    | 'PRESENT'
    | 'IMPERFECT'
    | 'PLUPERFECT'
    | undefined
  voice?: 'VOICE_UNKNOWN' | 'ACTIVE' | 'CAUSATIVE' | 'PASSIVE' | undefined
}
type Token = {
  dependencyEdge?: DependencyEdge | undefined
  lemma?: string | undefined
  partOfSpeech?: PartOfSpeech | undefined
  text?: TextSpan | undefined
}
type AnalyzeSyntaxResponse = {
  language?: string | undefined
  sentences?: Sentence[] | undefined
  tokens?: Token[] | undefined
}
type Features = {
  extractDocumentSentiment?: boolean | undefined
  extractEntities?: boolean | undefined
  extractSyntax?: boolean | undefined
}
type AnnotateTextRequest = {
  document?: Document | undefined
  encodingType?: 'NONE' | 'UTF8' | 'UTF16' | 'UTF32' | undefined
  features?: Features | undefined
}
type AnnotateTextResponse = {
  documentSentiment?: Sentiment | undefined
  entities?: Entity[] | undefined
  language?: string | undefined
  sentences?: Sentence[] | undefined
  tokens?: Token[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/documents:analyzeEntities': {
      $post: {
        input: {
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
        } & { json: AnalyzeEntitiesRequest }
        output: AnalyzeEntitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/documents:analyzeSentiment': {
      $post: {
        input: {
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
        } & { json: AnalyzeSentimentRequest }
        output: AnalyzeSentimentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/documents:analyzeSyntax': {
      $post: {
        input: {
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
        } & { json: AnalyzeSyntaxRequest }
        output: AnalyzeSyntaxResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/documents:annotateText': {
      $post: {
        input: {
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
        } & { json: AnnotateTextRequest }
        output: AnnotateTextResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
