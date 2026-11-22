import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1EmailRiskRoute,
  postV1FingerprintLookupRoute,
  postV1RulesListRoute,
  postV1RulesSetRoute,
  postV1VerdictReasonsListRoute,
  postV1VerdictReasonsOverrideRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fraudHandler = app
  .openapi(postV1FingerprintLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RulesSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RulesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VerdictReasonsOverrideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VerdictReasonsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EmailRiskRoute, (c) => {
    throw new Error('Not implemented')
  })
