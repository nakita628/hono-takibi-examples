import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCompareStringsRoute,
  postContainsStringRoute,
  postConvertCaseRoute,
  postDecodeStringRoute,
  postEncodeStringRoute,
  postGenerateGuidRoute,
  postGenerateHashRoute,
  postJoinStringsRoute,
  postRedactStringRoute,
  postReplaceStringRoute,
  postShortenLinkRoute,
  postSpeechToTextRoute,
  postSplitStringRoute,
  postStringToFileRoute,
  postTextToSpeechRoute,
  postTranslateStringRoute,
  postTrimStringRoute,
  postURLDecodeRoute,
  postURLEncodeRoute,
  postValidateEmailRoute,
  postVerifyHashRoute,
} from '../routes'

const app = new OpenAPIHono()

export const textHandler = app
  .openapi(postCompareStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContainsStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConvertCaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDecodeStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEncodeStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGenerateGuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGenerateHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJoinStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRedactStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReplaceStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShortenLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpeechToTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSplitStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStringToFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTextToSpeechRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTranslateStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTrimStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postURLDecodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postURLEncodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postValidateEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVerifyHashRoute, (c) => {
    throw new Error('Not implemented')
  })
