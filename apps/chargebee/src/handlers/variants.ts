import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVariantsProductVariantIdRoute,
  postVariantsProductVariantIdDeleteRoute,
  postVariantsProductVariantIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const variantsHandler = app
  .openapi(getVariantsProductVariantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVariantsProductVariantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVariantsProductVariantIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
