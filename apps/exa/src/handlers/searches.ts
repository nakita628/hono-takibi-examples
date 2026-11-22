import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV0WebsetsWebsetSearchesIdRoute,
  postV0WebsetsWebsetSearchesIdCancelRoute,
  postV0WebsetsWebsetSearchesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchesHandler = app
  .openapi(postV0WebsetsWebsetSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0WebsetsWebsetSearchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV0WebsetsWebsetSearchesIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
