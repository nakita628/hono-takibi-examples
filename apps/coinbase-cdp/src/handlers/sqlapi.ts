import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2DataQueryGrammarRoute,
  getV2DataQuerySchemaRoute,
  postV2DataQueryRunRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sqlapiHandler = app
  .openapi(postV2DataQueryRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DataQueryGrammarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DataQuerySchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
