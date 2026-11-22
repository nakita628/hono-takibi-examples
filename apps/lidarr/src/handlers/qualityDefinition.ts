import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1QualitydefinitionIdRoute,
  getApiV1QualitydefinitionRoute,
  putApiV1QualitydefinitionIdRoute,
  putApiV1QualitydefinitionUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const qualityDefinitionHandler = app
  .openapi(putApiV1QualitydefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QualitydefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QualitydefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1QualitydefinitionUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
