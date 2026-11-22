import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePronunciationDictsIdRoute,
  getPronunciationDictsIdRoute,
  getPronunciationDictsRoute,
  patchPronunciationDictsIdRoute,
  postPronunciationDictsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pronunciationDictionariesHandler = app
  .openapi(getPronunciationDictsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPronunciationDictsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePronunciationDictsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPronunciationDictsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPronunciationDictsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
