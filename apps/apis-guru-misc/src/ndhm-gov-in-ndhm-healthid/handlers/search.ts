import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1SearchExistsByHealthIdRoute,
  postV1SearchSearchByHealthIdRoute,
  postV1SearchSearchByMobileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(postV1SearchExistsByHealthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SearchSearchByHealthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SearchSearchByMobileRoute, (c) => {
    throw new Error('Not implemented')
  })
