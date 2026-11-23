import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getItemFamiliesItemFamilyIdRoute,
  getItemFamiliesRoute,
  postItemFamiliesItemFamilyIdDeleteRoute,
  postItemFamiliesItemFamilyIdRoute,
  postItemFamiliesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itemFamiliesHandler = app
  .openapi(postItemFamiliesItemFamilyIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemFamiliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemFamiliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemFamiliesItemFamilyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemFamiliesItemFamilyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
