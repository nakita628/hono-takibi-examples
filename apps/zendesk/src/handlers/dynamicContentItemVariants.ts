import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2DynamicContentItemsDynamicContentItemIdVariantsDynamicContentVariantIdRoute,
  getApiV2DynamicContentItemsDynamicContentItemIdVariantsDynamicContentVariantIdRoute,
  getApiV2DynamicContentItemsDynamicContentItemIdVariantsRoute,
  postApiV2DynamicContentItemsDynamicContentItemIdVariantsCreateManyRoute,
  postApiV2DynamicContentItemsDynamicContentItemIdVariantsRoute,
  putApiV2DynamicContentItemsDynamicContentItemIdVariantsDynamicContentVariantIdRoute,
  putApiV2DynamicContentItemsDynamicContentItemIdVariantsUpdateManyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dynamicContentItemVariantsHandler = app
  .openapi(getApiV2DynamicContentItemsDynamicContentItemIdVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DynamicContentItemsDynamicContentItemIdVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2DynamicContentItemsDynamicContentItemIdVariantsDynamicContentVariantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV2DynamicContentItemsDynamicContentItemIdVariantsDynamicContentVariantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV2DynamicContentItemsDynamicContentItemIdVariantsDynamicContentVariantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV2DynamicContentItemsDynamicContentItemIdVariantsCreateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2DynamicContentItemsDynamicContentItemIdVariantsUpdateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
