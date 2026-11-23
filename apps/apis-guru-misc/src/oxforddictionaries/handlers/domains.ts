import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDomainsSourceDomainsLanguageTargetDomainsLanguageRoute,
  getDomainsSourceLanguageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(getDomainsSourceDomainsLanguageTargetDomainsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsSourceLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
