import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHypernymsRoute,
  getHyponymsRoute,
  getInflectionsRoute,
  getLmFamilyRoute,
  getSensesRoute,
  getValuesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const languageModelDirectAccessHandler = app
  .openapi(getHypernymsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHyponymsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInflectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLmFamilyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
