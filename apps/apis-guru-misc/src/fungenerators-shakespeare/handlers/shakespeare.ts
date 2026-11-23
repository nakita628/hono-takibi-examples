import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getShakespeareGenerateInsultRoute,
  getShakespeareGenerateLoremIpsumRoute,
  getShakespeareGenerateNameRoute,
  getShakespeareQuoteRoute,
  getShakespeareTranslateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shakespeareHandler = app
  .openapi(getShakespeareGenerateInsultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShakespeareGenerateLoremIpsumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShakespeareGenerateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShakespeareQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShakespeareTranslateRoute, (c) => {
    throw new Error('Not implemented')
  })
