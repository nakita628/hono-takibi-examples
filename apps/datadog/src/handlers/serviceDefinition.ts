import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ServicesDefinitionsServiceNameRoute,
  getApiV2ServicesDefinitionsRoute,
  getApiV2ServicesDefinitionsServiceNameRoute,
  postApiV2ServicesDefinitionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceDefinitionHandler = app
  .openapi(getApiV2ServicesDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ServicesDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ServicesDefinitionsServiceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ServicesDefinitionsServiceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
