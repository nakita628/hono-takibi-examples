import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVCmsApiBuilderIdContentTypeDocumentIdIndexRoute,
  getVCmsApiBuilderIdContentTypeRoute,
  getVCmsApiBuilderIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vHandler = app
  .openapi(getVCmsApiBuilderIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVCmsApiBuilderIdContentTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVCmsApiBuilderIdContentTypeDocumentIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
