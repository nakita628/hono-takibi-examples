import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getServiceInventoriesIdRoute,
  getServiceInventoriesIdTagsRoute,
  getServiceInventoriesRoute,
  postServiceInventoriesIdTagRoute,
  postServiceInventoriesIdUntagRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceInventoriesHandler = app
  .openapi(getServiceInventoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceInventoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServiceInventoriesIdTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceInventoriesIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServiceInventoriesIdUntagRoute, (c) => {
    throw new Error('Not implemented')
  })
