import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV3QualitydefinitionIdRoute,
  getApiV3QualitydefinitionLimitsRoute,
  getApiV3QualitydefinitionRoute,
  putApiV3QualitydefinitionIdRoute,
  putApiV3QualitydefinitionUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const qualityDefinitionHandler = app
  .openapi(putApiV3QualitydefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3QualitydefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3QualitydefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3QualitydefinitionUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3QualitydefinitionLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
