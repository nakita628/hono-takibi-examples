import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRulesV4Route,
  deleteRulesV4RuleIdRoute,
  getRulesV4HealthRoute,
  getRulesV4Route,
  getRulesV4RuleIdRoute,
  getRulesV4VersionRoute,
  postRulesV4Route,
  putRulesV4RuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rulesHandler = app
  .openapi(deleteRulesV4Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRulesV4Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRulesV4Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRulesV4HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRulesV4VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRulesV4RuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRulesV4RuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRulesV4RuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
