import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiRuleSectionsIndexRoute, getApiRulesIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const rulesHandler = app
  .openapi(getApiRuleSectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
