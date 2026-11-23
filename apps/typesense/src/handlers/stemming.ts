import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStemmingDictionariesDictionaryIdRoute,
  getStemmingDictionariesRoute,
  postStemmingDictionariesImportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stemmingHandler = app
  .openapi(getStemmingDictionariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStemmingDictionariesDictionaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStemmingDictionariesImportRoute, (c) => {
    throw new Error('Not implemented')
  })
