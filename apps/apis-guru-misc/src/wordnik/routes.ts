import { createRoute, z } from '@hono/zod-openapi'

const ApiTokenStatusSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'expiresInMillis')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'expiresInMillis')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'remainingCalls')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'remainingCalls')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'resetsInMillis')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'resetsInMillis')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'token')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'token')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'totalRequests')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'totalRequests')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'valid')) {
        const Schema = z.boolean()
        if (!Schema.safeParse(Reflect.get(val, 'valid')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('ApiTokenStatus')

const AudioFileSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (!Object.hasOwn(val, 'id')) {
        ctx.addIssue({ code: 'custom' })
      }
      if (Object.hasOwn(val, 'attributionText')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'attributionText')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'attributionUrl')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'attributionUrl')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'audioType')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'audioType')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'commentCount')) {
        const Schema = z.int32()
        if (!Schema.safeParse(Reflect.get(val, 'commentCount')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'createdAt')) {
        const Schema = z.iso.date()
        if (!Schema.safeParse(Reflect.get(val, 'createdAt')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'createdBy')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'createdBy')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'description')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'description')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'duration')) {
        const Schema = z.float64()
        if (!Schema.safeParse(Reflect.get(val, 'duration')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'fileUrl')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'fileUrl')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'id')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'id')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'voteAverage')) {
        const Schema = z.float32()
        if (!Schema.safeParse(Reflect.get(val, 'voteAverage')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'voteCount')) {
        const Schema = z.int()
        if (!Schema.safeParse(Reflect.get(val, 'voteCount')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'voteWeightedAverage')) {
        const Schema = z.float32()
        if (!Schema.safeParse(Reflect.get(val, 'voteWeightedAverage')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'word')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'word')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi({ required: ['id'] })
  .openapi('AudioFile')

const AudioTypeSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'id')) {
        const Schema = z.int32()
        if (!Schema.safeParse(Reflect.get(val, 'id')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'name')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'name')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('AudioType')

const AuthenticationTokenSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'token')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'token')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'userId')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'userId')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'userSignature')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'userSignature')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('AuthenticationToken')

const BigramSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'count')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'count')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'gram1')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'gram1')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'gram2')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'gram2')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'mi')) {
        const Schema = z.float64()
        if (!Schema.safeParse(Reflect.get(val, 'mi')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'wlmi')) {
        const Schema = z.float64()
        if (!Schema.safeParse(Reflect.get(val, 'wlmi')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('Bigram')

const CategorySchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (!Object.hasOwn(val, 'id')) {
        ctx.addIssue({ code: 'custom' })
      }
      if (Object.hasOwn(val, 'id')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'id')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'name')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'name')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi({ required: ['id'] })
  .openapi('Category')

const CitationSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'cite')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'cite')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'source')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'source')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('Citation')

const ContentProviderSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'id')) {
        const Schema = z.int32()
        if (!Schema.safeParse(Reflect.get(val, 'id')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'name')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'name')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('ContentProvider')

const DefinitionSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'attributionText')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'attributionText')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'attributionUrl')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'attributionUrl')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'citations')) {
        const Schema = z.array(z.any())
        if (!Schema.safeParse(Reflect.get(val, 'citations')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'exampleUses')) {
        const Schema = z.array(z.any())
        if (!Schema.safeParse(Reflect.get(val, 'exampleUses')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'extendedText')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'extendedText')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'labels')) {
        const Schema = z.array(z.any())
        if (!Schema.safeParse(Reflect.get(val, 'labels')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'notes')) {
        const Schema = z.array(z.any())
        if (!Schema.safeParse(Reflect.get(val, 'notes')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'partOfSpeech')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'partOfSpeech')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'relatedWords')) {
        const Schema = z.array(z.any())
        if (!Schema.safeParse(Reflect.get(val, 'relatedWords')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'score')) {
        const Schema = z.float32()
        if (!Schema.safeParse(Reflect.get(val, 'score')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'seqString')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'seqString')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'sequence')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'sequence')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'sourceDictionary')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'sourceDictionary')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'text')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'text')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'textProns')) {
        const Schema = z.array(z.any())
        if (!Schema.safeParse(Reflect.get(val, 'textProns')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'word')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'word')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('Definition')

const DefinitionSearchResultsSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'results')) {
        const Schema = z.array(z.any())
        if (!Schema.safeParse(Reflect.get(val, 'results')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'totalResults')) {
        const Schema = z.int32()
        if (!Schema.safeParse(Reflect.get(val, 'totalResults')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('DefinitionSearchResults')

const ScoredWordSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'baseWordScore')) {
        const Schema = z.float64()
        if (!Schema.safeParse(Reflect.get(val, 'baseWordScore')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'docTermCount')) {
        const Schema = z.int32()
        if (!Schema.safeParse(Reflect.get(val, 'docTermCount')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'id')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'id')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'lemma')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'lemma')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'partOfSpeech')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'partOfSpeech')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'position')) {
        const Schema = z.int32()
        if (!Schema.safeParse(Reflect.get(val, 'position')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'score')) {
        const Schema = z.float32()
        if (!Schema.safeParse(Reflect.get(val, 'score')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'sentenceId')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'sentenceId')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'stopword')) {
        const Schema = z.boolean()
        if (!Schema.safeParse(Reflect.get(val, 'stopword')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'word')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'word')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'wordType')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'wordType')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('ScoredWord')

const SentenceSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'display')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'display')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'documentMetadataId')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'documentMetadataId')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'hasScoredWords')) {
        const Schema = z.boolean()
        if (!Schema.safeParse(Reflect.get(val, 'hasScoredWords')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'id')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'id')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'rating')) {
        const Schema = z.int32()
        if (!Schema.safeParse(Reflect.get(val, 'rating')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'scoredWords')) {
        const Schema = z.array(z.any())
        if (!Schema.safeParse(Reflect.get(val, 'scoredWords')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('Sentence')

const ExampleSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'documentId')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'documentId')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'exampleId')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'exampleId')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'id')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'id')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'provider')) {
        const Schema = ContentProviderSchema
        if (!Schema.safeParse(Reflect.get(val, 'provider')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'rating')) {
        const Schema = z.float32()
        if (!Schema.safeParse(Reflect.get(val, 'rating')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'score')) {
        const Schema = ScoredWordSchema
        if (!Schema.safeParse(Reflect.get(val, 'score')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'sentence')) {
        const Schema = SentenceSchema
        if (!Schema.safeParse(Reflect.get(val, 'sentence')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'text')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'text')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'title')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'title')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'url')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'url')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'word')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'word')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'year')) {
        const Schema = z.int()
        if (!Schema.safeParse(Reflect.get(val, 'year')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('Example')

const ExampleSearchResultsSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'examples')) {
        const Schema = z.array(z.any())
        if (!Schema.safeParse(Reflect.get(val, 'examples')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'facets')) {
        const Schema = z.array(z.any())
        if (!Schema.safeParse(Reflect.get(val, 'facets')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('ExampleSearchResults')

const ExampleUsageSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'text')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'text')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('ExampleUsage')

const FacetSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'facetValues')) {
        const Schema = z.array(z.any())
        if (!Schema.safeParse(Reflect.get(val, 'facetValues')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'name')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'name')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('Facet')

const FacetValueSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'count')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'count')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'value')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'value')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('FacetValue')

const FrequencySchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'count')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'count')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'year')) {
        const Schema = z.int32()
        if (!Schema.safeParse(Reflect.get(val, 'year')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('Frequency')

const FrequencySummarySchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'frequency')) {
        const Schema = z.array(z.any())
        if (!Schema.safeParse(Reflect.get(val, 'frequency')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'frequencyString')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'frequencyString')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'totalCount')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'totalCount')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'unknownYearCount')) {
        const Schema = z.int32()
        if (!Schema.safeParse(Reflect.get(val, 'unknownYearCount')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'word')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'word')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('FrequencySummary')

const LabelSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'text')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'text')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'type')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'type')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('Label')

const LongSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'value')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'value')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('Long')

const NoteSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'appliesTo')) {
        const Schema = z.array(z.string())
        if (!Schema.safeParse(Reflect.get(val, 'appliesTo')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'noteType')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'noteType')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'pos')) {
        const Schema = z.int32()
        if (!Schema.safeParse(Reflect.get(val, 'pos')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'value')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'value')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('Note')

const PartOfSpeechSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'allCategories')) {
        const Schema = z.array(z.any())
        if (!Schema.safeParse(Reflect.get(val, 'allCategories')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'roots')) {
        const Schema = z.array(z.any())
        if (!Schema.safeParse(Reflect.get(val, 'roots')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'storageAbbr')) {
        const Schema = z.array(z.string())
        if (!Schema.safeParse(Reflect.get(val, 'storageAbbr')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('PartOfSpeech')

const RelatedSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'gram')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'gram')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'label1')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'label1')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'label2')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'label2')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'label3')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'label3')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'label4')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'label4')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'relationshipType')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'relationshipType')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'words')) {
        const Schema = z.array(z.string())
        if (!Schema.safeParse(Reflect.get(val, 'words')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('Related')

const RootSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (!Object.hasOwn(val, 'id')) {
        ctx.addIssue({ code: 'custom' })
      }
      if (Object.hasOwn(val, 'categories')) {
        const Schema = z.array(z.any())
        if (!Schema.safeParse(Reflect.get(val, 'categories')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'id')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'id')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'name')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'name')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi({ required: ['id'] })
  .openapi('Root')

const SimpleDefinitionSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'note')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'note')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'partOfSpeech')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'partOfSpeech')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'source')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'source')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'text')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'text')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('SimpleDefinition')

const SimpleExampleSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'id')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'id')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'text')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'text')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'title')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'title')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'url')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'url')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('SimpleExample')

const StringValueSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'word')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'word')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('StringValue')

const SyllableSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'seq')) {
        const Schema = z.int32()
        if (!Schema.safeParse(Reflect.get(val, 'seq')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'text')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'text')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'type')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'type')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('Syllable')

const TextPronSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'raw')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'raw')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'rawType')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'rawType')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'seq')) {
        const Schema = z.int32()
        if (!Schema.safeParse(Reflect.get(val, 'seq')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('TextPron')

const UserSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'displayName')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'displayName')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'email')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'email')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'faceBookId')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'faceBookId')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'id')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'id')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'password')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'password')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'status')) {
        const Schema = z.int32()
        if (!Schema.safeParse(Reflect.get(val, 'status')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'userName')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'userName')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'username')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'username')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('User')

const WordListSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (!Object.hasOwn(val, 'id')) {
        ctx.addIssue({ code: 'custom' })
      }
      if (Object.hasOwn(val, 'createdAt')) {
        const Schema = z.iso.date()
        if (!Schema.safeParse(Reflect.get(val, 'createdAt')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'description')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'description')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'id')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'id')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'lastActivityAt')) {
        const Schema = z.iso.date()
        if (!Schema.safeParse(Reflect.get(val, 'lastActivityAt')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'name')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'name')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'numberWordsInList')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'numberWordsInList')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'permalink')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'permalink')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'type')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'type')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'updatedAt')) {
        const Schema = z.iso.date()
        if (!Schema.safeParse(Reflect.get(val, 'updatedAt')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'userId')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'userId')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'username')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'username')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi({ required: ['id'] })
  .openapi('WordList')

const WordListWordSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (!Object.hasOwn(val, 'id')) {
        ctx.addIssue({ code: 'custom' })
      }
      if (Object.hasOwn(val, 'createdAt')) {
        const Schema = z.iso.date()
        if (!Schema.safeParse(Reflect.get(val, 'createdAt')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'id')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'id')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'numberCommentsOnWord')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'numberCommentsOnWord')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'numberLists')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'numberLists')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'userId')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'userId')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'username')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'username')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'word')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'word')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi({ required: ['id'] })
  .openapi('WordListWord')

const WordObjectSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (!Object.hasOwn(val, 'id')) {
        ctx.addIssue({ code: 'custom' })
      }
      if (Object.hasOwn(val, 'canonicalForm')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'canonicalForm')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'id')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'id')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'originalWord')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'originalWord')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'suggestions')) {
        const Schema = z.array(z.string())
        if (!Schema.safeParse(Reflect.get(val, 'suggestions')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'vulgar')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'vulgar')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'word')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'word')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi({ required: ['id'] })
  .openapi('WordObject')

const WordOfTheDaySchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (!Object.hasOwn(val, 'id')) {
        ctx.addIssue({ code: 'custom' })
      }
      if (Object.hasOwn(val, 'category')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'category')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'contentProvider')) {
        const Schema = ContentProviderSchema
        if (!Schema.safeParse(Reflect.get(val, 'contentProvider')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'createdAt')) {
        const Schema = z.iso.date()
        if (!Schema.safeParse(Reflect.get(val, 'createdAt')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'createdBy')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'createdBy')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'definitions')) {
        const Schema = z.array(z.any())
        if (!Schema.safeParse(Reflect.get(val, 'definitions')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'examples')) {
        const Schema = z.array(z.any())
        if (!Schema.safeParse(Reflect.get(val, 'examples')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'htmlExtra')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'htmlExtra')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'id')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'id')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'note')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'note')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'parentId')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'parentId')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'publishDate')) {
        const Schema = z.iso.date()
        if (!Schema.safeParse(Reflect.get(val, 'publishDate')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'word')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'word')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi({ required: ['id'] })
  .openapi('WordOfTheDay')

const WordSearchResultSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'count')) {
        const Schema = z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' })
        if (!Schema.safeParse(Reflect.get(val, 'count')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'lexicality')) {
        const Schema = z.float64()
        if (!Schema.safeParse(Reflect.get(val, 'lexicality')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'word')) {
        const Schema = z.string()
        if (!Schema.safeParse(Reflect.get(val, 'word')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('WordSearchResult')

const WordSearchResultsSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (Object.hasOwn(val, 'searchResults')) {
        const Schema = z.array(z.any())
        if (!Schema.safeParse(Reflect.get(val, 'searchResults')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'totalResults')) {
        const Schema = z.int32()
        if (!Schema.safeParse(Reflect.get(val, 'totalResults')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .openapi('WordSearchResults')

const ApiKeySecurityScheme = { in: 'query', name: 'api_key', type: 'apiKey' }

export const getWordJsonWordAudioRoute = createRoute({
  method: 'get',
  path: '/word.json/{word}/audio',
  tags: ['word'],
  summary: 'Fetches audio metadata for a word.',
  description:
    'The metadata includes a time-expiring fileUrl which allows reading the audio file directly from the API.  Currently only audio pronunciations from the American Heritage Dictionary in mp3 format are supported.',
  operationId: 'getAudio',
  request: {
    params: z.object({
      word: z
        .string()
        .openapi({
          param: {
            description: 'Word to get audio for.',
            in: 'path',
            name: 'word',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      useCanonical: z
        .enum(['false', 'true'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            description:
              "If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.",
            in: 'query',
            name: 'useCanonical',
            required: false,
            schema: { default: 'false', enum: ['false', 'true'], type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'No response was specified',
      content: { '*/*': { schema: z.array(AudioFileSchema) } },
    },
  },
})

export const getWordJsonWordDefinitionsRoute = createRoute({
  method: 'get',
  path: '/word.json/{word}/definitions',
  tags: ['word'],
  summary: 'Return definitions for a word',
  operationId: 'getDefinitions',
  request: {
    params: z.object({
      word: z
        .string()
        .openapi({
          param: {
            description: 'Word to return definitions for',
            in: 'path',
            name: 'word',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(200)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 200, format: 'int32', type: 'integer' },
          },
        }),
      partOfSpeech: z
        .enum([
          'noun',
          'adjective',
          'verb',
          'adverb',
          'interjection',
          'pronoun',
          'preposition',
          'abbreviation',
          'affix',
          'article',
          'auxiliary-verb',
          'conjunction',
          'definite-article',
          'family-name',
          'given-name',
          'idiom',
          'imperative',
          'noun-plural',
          'noun-posessive',
          'past-participle',
          'phrasal-prefix',
          'proper-noun',
          'proper-noun-plural',
          'proper-noun-posessive',
          'suffix',
          'verb-intransitive',
          'verb-transitive',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'CSV list of part-of-speech types',
            in: 'query',
            name: 'partOfSpeech',
            required: false,
            schema: {
              enum: [
                'noun',
                'adjective',
                'verb',
                'adverb',
                'interjection',
                'pronoun',
                'preposition',
                'abbreviation',
                'affix',
                'article',
                'auxiliary-verb',
                'conjunction',
                'definite-article',
                'family-name',
                'given-name',
                'idiom',
                'imperative',
                'noun-plural',
                'noun-posessive',
                'past-participle',
                'phrasal-prefix',
                'proper-noun',
                'proper-noun-plural',
                'proper-noun-posessive',
                'suffix',
                'verb-intransitive',
                'verb-transitive',
              ],
              type: 'string',
            },
          },
        }),
      includeRelated: z
        .string()
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            description: 'Return related words with definitions',
            in: 'query',
            name: 'includeRelated',
            required: false,
            schema: { default: 'false', type: 'string' },
          },
        }),
      sourceDictionaries: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.union([
            z.literal('all'),
            z.literal('ahd-5'),
            z.literal('century'),
            z.literal('wiktionary'),
            z.literal('webster'),
            z.literal('wordnet'),
          ]),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Source dictionary to return definitions from.  If 'all' is received, results are returned from all sources. If multiple values are received (e.g. 'century,wiktionary'), results are returned from the first specified dictionary that has definitions. If left blank, results are returned from the first dictionary that has definitions. By default, dictionaries are searched in this order: ahd-5, wiktionary, webster, century, wordnet",
            explode: false,
            in: 'query',
            name: 'sourceDictionaries',
            required: false,
            schema: {
              enum: ['all', 'ahd-5', 'century', 'wiktionary', 'webster', 'wordnet'],
              items: { type: 'string' },
              type: 'array',
            },
            style: 'form',
          },
        }),
      useCanonical: z
        .enum(['false', 'true'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            description:
              "If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.",
            in: 'query',
            name: 'useCanonical',
            required: false,
            schema: { default: 'false', enum: ['false', 'true'], type: 'string' },
          },
        }),
      includeTags: z
        .enum(['false', 'true'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            description: 'Return a closed set of XML tags in response',
            in: 'query',
            name: 'includeTags',
            required: false,
            schema: { default: 'false', enum: ['false', 'true'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'No response was specified',
      content: { '*/*': { schema: z.array(DefinitionSchema) } },
    },
  },
})

export const getWordJsonWordEtymologiesRoute = createRoute({
  method: 'get',
  path: '/word.json/{word}/etymologies',
  tags: ['word'],
  summary: 'Fetches etymology data',
  operationId: 'getEtymologies',
  request: {
    params: z.object({
      word: z
        .string()
        .openapi({
          param: {
            description: 'Word to return',
            in: 'path',
            name: 'word',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      useCanonical: z
        .enum(['false', 'true'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            description:
              "If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.",
            in: 'query',
            name: 'useCanonical',
            required: false,
            schema: { default: 'false', enum: ['false', 'true'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'No response was specified',
      content: { '*/*': { schema: z.array(z.string()) } },
    },
  },
})

export const getWordJsonWordExamplesRoute = createRoute({
  method: 'get',
  path: '/word.json/{word}/examples',
  tags: ['word'],
  summary: 'Returns examples for a word',
  operationId: 'getExamples',
  request: {
    params: z.object({
      word: z
        .string()
        .openapi({
          param: {
            description: 'Word to return examples for',
            in: 'path',
            name: 'word',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      includeDuplicates: z
        .enum(['false', 'true'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            description: 'Show duplicate examples from different sources',
            in: 'query',
            name: 'includeDuplicates',
            required: false,
            schema: { default: 'false', enum: ['false', 'true'], type: 'string' },
          },
        }),
      useCanonical: z
        .enum(['false', 'true'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            description:
              "If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.",
            in: 'query',
            name: 'useCanonical',
            required: false,
            schema: { default: 'false', enum: ['false', 'true'], type: 'string' },
          },
        }),
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Results to skip',
            in: 'query',
            name: 'skip',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(5)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 5, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'No response was specified',
      content: { '*/*': { schema: ExampleSearchResultsSchema } },
    },
  },
})

export const getWordJsonWordFrequencyRoute = createRoute({
  method: 'get',
  path: '/word.json/{word}/frequency',
  tags: ['word'],
  summary: 'Returns word usage over time',
  operationId: 'getWordFrequency',
  request: {
    params: z.object({
      word: z
        .string()
        .openapi({
          param: {
            description: 'Word to return',
            in: 'path',
            name: 'word',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      useCanonical: z
        .enum(['false', 'true'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            description:
              "If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.",
            in: 'query',
            name: 'useCanonical',
            required: false,
            schema: { default: 'false', enum: ['false', 'true'], type: 'string' },
          },
        }),
      startYear: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1800)
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting Year',
            in: 'query',
            name: 'startYear',
            required: false,
            schema: { default: 1800, format: 'int32', type: 'integer' },
          },
        }),
      endYear: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(2012)
        .exactOptional()
        .openapi({
          param: {
            description: 'Ending Year',
            in: 'query',
            name: 'endYear',
            required: false,
            schema: { default: 2012, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'No response was specified',
      content: { '*/*': { schema: FrequencySummarySchema } },
    },
  },
})

export const getWordJsonWordHyphenationRoute = createRoute({
  method: 'get',
  path: '/word.json/{word}/hyphenation',
  tags: ['word'],
  summary: 'Returns syllable information for a word',
  operationId: 'getHyphenation',
  request: {
    params: z.object({
      word: z
        .string()
        .openapi({
          param: {
            description: 'Word to get syllables for',
            in: 'path',
            name: 'word',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      useCanonical: z
        .enum(['false', 'true'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            description:
              "If true will try to return a correct word root ('cats' -> 'cat'). If false returns exactly what was requested.",
            in: 'query',
            name: 'useCanonical',
            required: false,
            schema: { default: 'false', enum: ['false', 'true'], type: 'string' },
          },
        }),
      sourceDictionary: z
        .enum(['ahd-5', 'century', 'wiktionary', 'webster', 'wordnet'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Get from a single dictionary. Valid options: ahd-5, century, wiktionary, webster, and wordnet.',
            in: 'query',
            name: 'sourceDictionary',
            required: false,
            schema: {
              enum: ['ahd-5', 'century', 'wiktionary', 'webster', 'wordnet'],
              type: 'string',
            },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'No response was specified',
      content: { '*/*': { schema: z.array(SyllableSchema) } },
    },
  },
})

export const getWordJsonWordPhrasesRoute = createRoute({
  method: 'get',
  path: '/word.json/{word}/phrases',
  tags: ['word'],
  summary: 'Fetches bi-gram phrases for a word',
  operationId: 'getPhrases',
  request: {
    params: z.object({
      word: z
        .string()
        .openapi({
          param: {
            description: 'Word to fetch phrases for',
            in: 'path',
            name: 'word',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(5)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 5, format: 'int32', type: 'integer' },
          },
        }),
      wlmi: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum WLMI for the phrase',
            in: 'query',
            name: 'wlmi',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      useCanonical: z
        .enum(['false', 'true'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            description:
              "If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.",
            in: 'query',
            name: 'useCanonical',
            required: false,
            schema: { default: 'false', enum: ['false', 'true'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'No response was specified',
      content: { '*/*': { schema: z.array(BigramSchema) } },
    },
  },
})

export const getWordJsonWordPronunciationsRoute = createRoute({
  method: 'get',
  path: '/word.json/{word}/pronunciations',
  tags: ['word'],
  summary: 'Returns text pronunciations for a given word',
  operationId: 'getTextPronunciations',
  request: {
    params: z.object({
      word: z
        .string()
        .openapi({
          param: {
            description: 'Word to get pronunciations for',
            in: 'path',
            name: 'word',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      useCanonical: z
        .enum(['false', 'true'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            description:
              "If true will try to return a correct word root ('cats' -> 'cat'). If false returns exactly what was requested.",
            in: 'query',
            name: 'useCanonical',
            required: false,
            schema: { default: 'false', enum: ['false', 'true'], type: 'string' },
          },
        }),
      sourceDictionary: z
        .enum(['ahd-5', 'century', 'cmu', 'macmillan', 'wiktionary', 'webster', 'wordnet'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Get from a single dictionary',
            in: 'query',
            name: 'sourceDictionary',
            required: false,
            schema: {
              enum: ['ahd-5', 'century', 'cmu', 'macmillan', 'wiktionary', 'webster', 'wordnet'],
              type: 'string',
            },
          },
        }),
      typeFormat: z
        .enum(['ahd-5', 'arpabet', 'gcide-diacritical', 'IPA'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Text pronunciation type',
            in: 'query',
            name: 'typeFormat',
            required: false,
            schema: { enum: ['ahd-5', 'arpabet', 'gcide-diacritical', 'IPA'], type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'No response was specified',
      content: { '*/*': { schema: z.array(TextPronSchema) } },
    },
  },
})

export const getWordJsonWordRelatedWordsRoute = createRoute({
  method: 'get',
  path: '/word.json/{word}/relatedWords',
  tags: ['word'],
  summary: 'Given a word as a string, returns relationships from the Word Graph',
  operationId: 'getRelatedWords',
  request: {
    params: z.object({
      word: z
        .string()
        .openapi({
          param: {
            description: 'Word to fetch relationships for',
            in: 'path',
            name: 'word',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      useCanonical: z
        .enum(['false', 'true'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            description:
              "If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.",
            in: 'query',
            name: 'useCanonical',
            required: false,
            schema: { default: 'false', enum: ['false', 'true'], type: 'string' },
          },
        }),
      relationshipTypes: z
        .enum([
          'synonym',
          'antonym',
          'variant',
          'equivalent',
          'cross-reference',
          'related-word',
          'rhyme',
          'form',
          'etymologically-related-term',
          'hypernym',
          'hyponym',
          'inflected-form',
          'primary',
          'same-context',
          'verb-form',
          'verb-stem',
          'has_topic',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the total results per type of relationship type',
            in: 'query',
            name: 'relationshipTypes',
            required: false,
            schema: {
              enum: [
                'synonym',
                'antonym',
                'variant',
                'equivalent',
                'cross-reference',
                'related-word',
                'rhyme',
                'form',
                'etymologically-related-term',
                'hypernym',
                'hyponym',
                'inflected-form',
                'primary',
                'same-context',
                'verb-form',
                'verb-stem',
                'has_topic',
              ],
              type: 'string',
            },
          },
        }),
      limitPerRelationshipType: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict to the supplied relationship types',
            in: 'query',
            name: 'limitPerRelationshipType',
            required: false,
            schema: { default: 10, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'No response was specified',
      content: { '*/*': { schema: z.array(RelatedSchema) } },
    },
  },
})

export const getWordJsonWordScrabbleScoreRoute = createRoute({
  method: 'get',
  path: '/word.json/{word}/scrabbleScore',
  tags: ['word'],
  summary: 'Returns the Scrabble score for a word',
  operationId: 'getScrabbleScore',
  request: {
    params: z.object({
      word: z
        .string()
        .openapi({
          param: {
            description: 'Word to get scrabble score for.',
            in: 'path',
            name: 'word',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'No response was specified',
      content: {
        '*/*': {
          schema: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({ type: 'integer', format: 'int64' }),
        },
      },
    },
  },
})

export const getWordJsonWordTopExampleRoute = createRoute({
  method: 'get',
  path: '/word.json/{word}/topExample',
  tags: ['word'],
  summary: 'Returns a top example for a word',
  operationId: 'getTopExample',
  request: {
    params: z.object({
      word: z
        .string()
        .openapi({
          param: {
            description: 'Word to fetch examples for',
            in: 'path',
            name: 'word',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      useCanonical: z
        .enum(['false', 'true'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            description:
              "If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.",
            in: 'query',
            name: 'useCanonical',
            required: false,
            schema: { default: 'false', enum: ['false', 'true'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'No response was specified',
      content: { '*/*': { schema: ExampleSchema } },
    },
  },
})

export const getWordsJsonRandomWordRoute = createRoute({
  method: 'get',
  path: '/words.json/randomWord',
  tags: ['words'],
  summary: 'Returns a single random WordObject',
  operationId: 'getRandomWord',
  request: {
    query: z.object({
      hasDictionaryDef: z
        .string()
        .default('true')
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return words with dictionary definitions',
            in: 'query',
            name: 'hasDictionaryDef',
            required: false,
            schema: { default: 'true', type: 'string' },
          },
        }),
      includePartOfSpeech: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'CSV part-of-speech values to include (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)',
            in: 'query',
            name: 'includePartOfSpeech',
            required: false,
            schema: { type: 'string' },
          },
        }),
      excludePartOfSpeech: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'CSV part-of-speech values to exclude (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)',
            in: 'query',
            name: 'excludePartOfSpeech',
            required: false,
            schema: { type: 'string' },
          },
        }),
      minCorpusCount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum corpus frequency for terms',
            in: 'query',
            name: 'minCorpusCount',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      maxCorpusCount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum corpus frequency for terms',
            in: 'query',
            name: 'maxCorpusCount',
            required: false,
            schema: { default: -1, format: 'int32', type: 'integer' },
          },
        }),
      minDictionaryCount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum dictionary count',
            in: 'query',
            name: 'minDictionaryCount',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
      maxDictionaryCount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum dictionary count',
            in: 'query',
            name: 'maxDictionaryCount',
            required: false,
            schema: { default: -1, format: 'int32', type: 'integer' },
          },
        }),
      minLength: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(5)
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum word length',
            in: 'query',
            name: 'minLength',
            required: false,
            schema: { default: 5, format: 'int32', type: 'integer' },
          },
        }),
      maxLength: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum word length',
            in: 'query',
            name: 'maxLength',
            required: false,
            schema: { default: -1, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'No response was specified',
      content: { '*/*': { schema: WordObjectSchema } },
    },
  },
})

export const getWordsJsonRandomWordsRoute = createRoute({
  method: 'get',
  path: '/words.json/randomWords',
  tags: ['words'],
  summary: 'Returns an array of random WordObjects',
  operationId: 'getRandomWords',
  request: {
    query: z.object({
      hasDictionaryDef: z
        .string()
        .default('true')
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return words with dictionary definitions',
            in: 'query',
            name: 'hasDictionaryDef',
            required: false,
            schema: { default: 'true', type: 'string' },
          },
        }),
      includePartOfSpeech: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'CSV part-of-speech values to include (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)',
            in: 'query',
            name: 'includePartOfSpeech',
            required: false,
            schema: { type: 'string' },
          },
        }),
      excludePartOfSpeech: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'CSV part-of-speech values to exclude (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)',
            in: 'query',
            name: 'excludePartOfSpeech',
            required: false,
            schema: { type: 'string' },
          },
        }),
      minCorpusCount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum corpus frequency for terms',
            in: 'query',
            name: 'minCorpusCount',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      maxCorpusCount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum corpus frequency for terms',
            in: 'query',
            name: 'maxCorpusCount',
            required: false,
            schema: { default: -1, format: 'int32', type: 'integer' },
          },
        }),
      minDictionaryCount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum dictionary count',
            in: 'query',
            name: 'minDictionaryCount',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
      maxDictionaryCount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum dictionary count',
            in: 'query',
            name: 'maxDictionaryCount',
            required: false,
            schema: { default: -1, format: 'int32', type: 'integer' },
          },
        }),
      minLength: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(5)
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum word length',
            in: 'query',
            name: 'minLength',
            required: false,
            schema: { default: 5, format: 'int32', type: 'integer' },
          },
        }),
      maxLength: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum word length',
            in: 'query',
            name: 'maxLength',
            required: false,
            schema: { default: -1, format: 'int32', type: 'integer' },
          },
        }),
      sortBy: z
        .enum(['alpha', 'count'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Attribute to sort by',
            in: 'query',
            name: 'sortBy',
            required: false,
            schema: { enum: ['alpha', 'count'], type: 'string' },
          },
        }),
      sortOrder: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort direction',
            in: 'query',
            name: 'sortOrder',
            required: false,
            schema: { enum: ['asc', 'desc'], type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 10, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'No response was specified',
      content: { '*/*': { schema: z.array(WordObjectSchema) } },
    },
  },
})

export const getWordsJsonReverseDictionaryRoute = createRoute({
  method: 'get',
  path: '/words.json/reverseDictionary',
  tags: ['words'],
  summary: 'Reverse dictionary search',
  operationId: 'reverseDictionary',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'Search term',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      findSenseForWord: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Restricts words and finds closest sense',
            in: 'query',
            name: 'findSenseForWord',
            required: false,
            schema: { type: 'string' },
          },
        }),
      includeSourceDictionaries: z
        .enum(['ahd-5', 'century', 'cmu', 'macmillan', 'wiktionary', 'webster', 'wordnet'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Only include these comma-delimited source dictionaries',
            in: 'query',
            name: 'includeSourceDictionaries',
            required: false,
            schema: {
              enum: ['ahd-5', 'century', 'cmu', 'macmillan', 'wiktionary', 'webster', 'wordnet'],
              type: 'string',
            },
          },
        }),
      excludeSourceDictionaries: z
        .enum(['ahd-5', 'century', 'cmu', 'macmillan', 'wiktionary', 'webster', 'wordnet'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude these comma-delimited source dictionaries',
            in: 'query',
            name: 'excludeSourceDictionaries',
            required: false,
            schema: {
              enum: ['ahd-5', 'century', 'cmu', 'macmillan', 'wiktionary', 'webster', 'wordnet'],
              type: 'string',
            },
          },
        }),
      includePartOfSpeech: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only include these comma-delimited parts of speech (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)',
            in: 'query',
            name: 'includePartOfSpeech',
            required: false,
            schema: { type: 'string' },
          },
        }),
      excludePartOfSpeech: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Exclude these comma-delimited parts of speech (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)',
            in: 'query',
            name: 'excludePartOfSpeech',
            required: false,
            schema: { type: 'string' },
          },
        }),
      minCorpusCount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(5)
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum corpus frequency for terms',
            in: 'query',
            name: 'minCorpusCount',
            required: false,
            schema: { default: 5, format: 'int32', type: 'integer' },
          },
        }),
      maxCorpusCount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum corpus frequency for terms',
            in: 'query',
            name: 'maxCorpusCount',
            required: false,
            schema: { default: -1, format: 'int32', type: 'integer' },
          },
        }),
      minLength: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum word length',
            in: 'query',
            name: 'minLength',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
      maxLength: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum word length',
            in: 'query',
            name: 'maxLength',
            required: false,
            schema: { default: -1, format: 'int32', type: 'integer' },
          },
        }),
      expandTerms: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Expand terms',
            in: 'query',
            name: 'expandTerms',
            required: false,
            schema: { type: 'string' },
          },
        }),
      includeTags: z
        .enum(['false', 'true'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            description: 'Return a closed set of XML tags in response',
            in: 'query',
            name: 'includeTags',
            required: false,
            schema: { default: 'false', enum: ['false', 'true'], type: 'string' },
          },
        }),
      sortBy: z
        .enum(['alpha', 'count'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Attribute to sort by',
            in: 'query',
            name: 'sortBy',
            required: false,
            schema: { enum: ['alpha', 'count'], type: 'string' },
          },
        }),
      sortOrder: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort direction',
            in: 'query',
            name: 'sortOrder',
            required: false,
            schema: { enum: ['asc', 'desc'], type: 'string' },
          },
        }),
      skip: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Results to skip',
            in: 'query',
            name: 'skip',
            required: false,
            schema: { default: '0', type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 10, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'No response was specified',
      content: { '*/*': { schema: DefinitionSearchResultsSchema } },
    },
  },
})

export const getWordsJsonSearchQueryRoute = createRoute({
  method: 'get',
  path: '/words.json/search/{query}',
  tags: ['words'],
  summary: 'Searches words',
  operationId: 'searchWords',
  request: {
    query: z.object({
      allowRegex: z
        .string()
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            description: 'Search term is a Regular Expression',
            in: 'query',
            name: 'allowRegex',
            required: false,
            schema: { default: 'false', type: 'string' },
          },
        }),
      caseSensitive: z
        .string()
        .default('true')
        .exactOptional()
        .openapi({
          param: {
            description: 'Search case sensitive',
            in: 'query',
            name: 'caseSensitive',
            required: false,
            schema: { default: 'true', type: 'string' },
          },
        }),
      includePartOfSpeech: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only include these comma-delimited parts of speech (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)',
            in: 'query',
            name: 'includePartOfSpeech',
            required: false,
            schema: { type: 'string' },
          },
        }),
      excludePartOfSpeech: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Exclude these comma-delimited parts of speech (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)',
            in: 'query',
            name: 'excludePartOfSpeech',
            required: false,
            schema: { type: 'string' },
          },
        }),
      minCorpusCount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(5)
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum corpus frequency for terms',
            in: 'query',
            name: 'minCorpusCount',
            required: false,
            schema: { default: 5, format: 'int32', type: 'integer' },
          },
        }),
      maxCorpusCount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum corpus frequency for terms',
            in: 'query',
            name: 'maxCorpusCount',
            required: false,
            schema: { default: -1, format: 'int32', type: 'integer' },
          },
        }),
      minDictionaryCount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum number of dictionary entries for words returned',
            in: 'query',
            name: 'minDictionaryCount',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
      maxDictionaryCount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum dictionary definition count',
            in: 'query',
            name: 'maxDictionaryCount',
            required: false,
            schema: { default: -1, format: 'int32', type: 'integer' },
          },
        }),
      minLength: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum word length',
            in: 'query',
            name: 'minLength',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
      maxLength: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum word length',
            in: 'query',
            name: 'maxLength',
            required: false,
            schema: { default: -1, format: 'int32', type: 'integer' },
          },
        }),
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Results to skip',
            in: 'query',
            name: 'skip',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 10, format: 'int32', type: 'integer' },
          },
        }),
    }),
    params: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'Search query',
            in: 'path',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'No response was specified',
      content: { '*/*': { schema: WordSearchResultsSchema } },
    },
  },
})

export const getWordsJsonWordOfTheDayRoute = createRoute({
  method: 'get',
  path: '/words.json/wordOfTheDay',
  tags: ['words'],
  summary: 'Returns a specific WordOfTheDay',
  operationId: 'getWordOfTheDay',
  request: {
    query: z.object({
      date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Fetches by date in yyyy-MM-dd',
            in: 'query',
            name: 'date',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'No response was specified',
      content: { '*/*': { schema: WordOfTheDaySchema } },
    },
  },
})
