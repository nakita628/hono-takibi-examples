import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApi2JsonGenderJapaneseNameFullJapaneseNameRoute,
  getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameRoute,
  getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderRoute,
  getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinRoute,
  getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiRoute,
  getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameRoute,
  getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameRoute,
  getApi2JsonParseJapaneseNameJapaneseNameRoute,
  postApi2JsonGenderJapaneseNameBatchRoute,
  postApi2JsonGenderJapaneseNameFullBatchRoute,
  postApi2JsonJapaneseNameGenderKanjiCandidatesBatchRoute,
  postApi2JsonJapaneseNameKanjiCandidatesBatchRoute,
  postApi2JsonJapaneseNameLatinCandidatesBatchRoute,
  postApi2JsonJapaneseNameMatchBatchRoute,
  postApi2JsonParseJapaneseNameBatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const japaneseHandler = app
  .openapi(getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonGenderJapaneseNameBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonGenderJapaneseNameFullJapaneseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonGenderJapaneseNameFullBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonJapaneseNameGenderKanjiCandidatesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApi2JsonJapaneseNameKanjiCandidatesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApi2JsonJapaneseNameLatinCandidatesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApi2JsonJapaneseNameMatchBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApi2JsonParseJapaneseNameJapaneseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonParseJapaneseNameBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
