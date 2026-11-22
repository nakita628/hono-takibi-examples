import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2StringDefinitionsIDRoute,
  getApiV2StringDefinitionsRoute,
  postApiV2StringDefinitionsBatchRoute,
  putApiV2StringDefinitionsBatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stringDefinitionsHandler = app
  .openapi(getApiV2StringDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StringDefinitionsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2StringDefinitionsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StringDefinitionsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
