import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1CheckIndexRoute,
  getApiV1ConfigurationLinkIndexRoute,
  getApiV1ExposedIndexRoute,
  postApiV1ExposedExposedAppActionIdExecuteIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1CheckIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigurationLinkIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ExposedIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ExposedExposedAppActionIdExecuteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
