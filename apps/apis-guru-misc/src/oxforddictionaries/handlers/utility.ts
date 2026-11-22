import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDomainsSourceDomainsLanguageTargetDomainsLanguageRoute,
  getDomainsSourceLanguageRoute,
  getFiltersEndpointRoute,
  getFiltersRoute,
  getGrammaticalFeaturesSourceLanguageRoute,
  getLanguagesRoute,
  getLexicalcategoriesLanguageRoute,
  getRegionsSourceLanguageRoute,
  getRegistersSourceLanguageRoute,
  getRegistersSourceRegisterLanguageTargetRegisterLanguageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const utilityHandler = app
  .openapi(getDomainsSourceDomainsLanguageTargetDomainsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsSourceLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFiltersEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGrammaticalFeaturesSourceLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLexicalcategoriesLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegionsSourceLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistersSourceLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistersSourceRegisterLanguageTargetRegisterLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
