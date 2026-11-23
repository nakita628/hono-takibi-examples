import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPortoutsIdCommentsRoute,
  getPortoutsIdRoute,
  getPortoutsRoute,
  patchPortoutsIdStatusRoute,
  postPortoutsIdCommentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const portoutsHandler = app
  .openapi(getPortoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortoutsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortoutsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortoutsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPortoutsIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
