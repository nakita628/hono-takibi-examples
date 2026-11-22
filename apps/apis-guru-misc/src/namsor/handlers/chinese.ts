import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinRoute,
  getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderRoute,
  getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameRoute,
  getApi2JsonGenderChineseNameChineseNameRoute,
  getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinRoute,
  getApi2JsonParseChineseNameChineseNameRoute,
  getApi2JsonPinyinChineseNameChineseNameRoute,
  postApi2JsonChineseNameCandidatesBatchRoute,
  postApi2JsonChineseNameCandidatesGenderBatchRoute,
  postApi2JsonChineseNameMatchBatchRoute,
  postApi2JsonGenderChineseNameBatchRoute,
  postApi2JsonGenderChineseNamePinyinBatchRoute,
  postApi2JsonParseChineseNameBatchRoute,
  postApi2JsonPinyinChineseNameBatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chineseHandler = app
  .openapi(getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonChineseNameCandidatesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonChineseNameCandidatesGenderBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApi2JsonChineseNameMatchBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonGenderChineseNameChineseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonGenderChineseNameBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonGenderChineseNamePinyinBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonParseChineseNameChineseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonParseChineseNameBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonPinyinChineseNameChineseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonPinyinChineseNameBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
