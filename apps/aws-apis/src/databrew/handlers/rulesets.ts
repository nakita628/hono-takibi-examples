import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRulesetsNameRoute,
  getRulesetsNameRoute,
  getRulesetsRoute,
  postRulesetsRoute,
  putRulesetsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rulesetsHandler = app
  .openapi(postRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRulesetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRulesetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRulesetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
