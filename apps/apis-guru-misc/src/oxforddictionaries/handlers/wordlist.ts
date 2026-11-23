import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWordlistSourceLangFiltersAdvancedRoute,
  getWordlistSourceLangFiltersBasicRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wordlistHandler = app
  .openapi(getWordlistSourceLangFiltersAdvancedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWordlistSourceLangFiltersBasicRoute, (c) => {
    throw new Error('Not implemented')
  })
