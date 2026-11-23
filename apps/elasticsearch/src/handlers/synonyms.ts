import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSynonymsIdRoute,
  deleteSynonymsSetIdRuleIdRoute,
  getSynonymsIdRoute,
  getSynonymsRoute,
  getSynonymsSetIdRuleIdRoute,
  putSynonymsIdRoute,
  putSynonymsSetIdRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const synonymsHandler = app
  .openapi(getSynonymsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSynonymsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSynonymsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSynonymsSetIdRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSynonymsSetIdRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSynonymsSetIdRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSynonymsRoute, (c) => {
    throw new Error('Not implemented')
  })
