import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEnmDbQueryCompoundTermRepresentationRoute,
  getEnmDbQuerySimilarityRoute,
  getEnmDbQuerySmartsRoute,
  getEnmDbSubstanceUuidCompositionRoute,
  getEnmDbSubstanceUuidStructuresRoute,
} from '../routes'

const app = new OpenAPIHono()

export const structuresHandler = app
  .openapi(getEnmDbQueryCompoundTermRepresentationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnmDbQuerySimilarityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnmDbQuerySmartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnmDbSubstanceUuidCompositionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnmDbSubstanceUuidStructuresRoute, (c) => {
    throw new Error('Not implemented')
  })
