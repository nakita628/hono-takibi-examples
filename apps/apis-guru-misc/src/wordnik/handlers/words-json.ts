import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWordsJsonRandomWordRoute,
  getWordsJsonRandomWordsRoute,
  getWordsJsonReverseDictionaryRoute,
  getWordsJsonSearchQueryRoute,
  getWordsJsonWordOfTheDayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wordsJsonHandler = app
  .openapi(getWordsJsonRandomWordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWordsJsonRandomWordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWordsJsonReverseDictionaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWordsJsonSearchQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWordsJsonWordOfTheDayRoute, (c) => {
    throw new Error('Not implemented')
  })
