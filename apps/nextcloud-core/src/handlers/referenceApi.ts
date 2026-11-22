import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpReferencesProvidersRoute,
  getOcsV2PhpReferencesResolvePublicRoute,
  getOcsV2PhpReferencesResolveRoute,
  postOcsV2PhpReferencesExtractPublicRoute,
  postOcsV2PhpReferencesExtractRoute,
  postOcsV2PhpReferencesResolvePublicRoute,
  postOcsV2PhpReferencesResolveRoute,
  putOcsV2PhpReferencesProviderProviderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const referenceApiHandler = app
  .openapi(postOcsV2PhpReferencesExtractRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpReferencesExtractPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpReferencesResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpReferencesResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpReferencesResolvePublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpReferencesResolvePublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpReferencesProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpReferencesProviderProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
