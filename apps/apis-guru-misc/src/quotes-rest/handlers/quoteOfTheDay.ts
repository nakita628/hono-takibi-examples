import { OpenAPIHono } from '@hono/zod-openapi'
import { getQodCategoriesRoute, getQodLanguagesRoute, getQodRoute } from '../routes'

const app = new OpenAPIHono()

export const quoteOfTheDayHandler = app
  .openapi(getQodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQodCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQodLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
