import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1DataplaneGroupCreateRoute,
  postV1DataplaneGroupDeleteRoute,
  postV1DataplaneGroupListRoute,
  postV1DataplaneGroupUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataplaneGroupHandler = app
  .openapi(postV1DataplaneGroupCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplaneGroupUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplaneGroupDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplaneGroupListRoute, (c) => {
    throw new Error('Not implemented')
  })
