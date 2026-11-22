import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1BrandTemplatesBrandTemplateIdDatasetRoute,
  getV1BrandTemplatesBrandTemplateIdRoute,
  getV1BrandTemplatesRoute,
  postV1BrandTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const brandTemplateHandler = app
  .openapi(getV1BrandTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BrandTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BrandTemplatesBrandTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BrandTemplatesBrandTemplateIdDatasetRoute, (c) => {
    throw new Error('Not implemented')
  })
