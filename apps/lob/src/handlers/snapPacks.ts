import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSnapPacksSnapPackIdRoute,
  getSnapPacksRoute,
  getSnapPacksSnapPackIdRoute,
  postSnapPacksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snapPacksHandler = app
  .openapi(getSnapPacksSnapPackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSnapPacksSnapPackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnapPacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnapPacksRoute, (c) => {
    throw new Error('Not implemented')
  })
