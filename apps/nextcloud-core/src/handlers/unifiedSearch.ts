import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpSearchProvidersProviderIdSearchRoute,
  getOcsV2PhpSearchProvidersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const unifiedSearchHandler = app
  .openapi(getOcsV2PhpSearchProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpSearchProvidersProviderIdSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
