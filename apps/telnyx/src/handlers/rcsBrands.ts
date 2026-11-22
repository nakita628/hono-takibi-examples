import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRcsBrandsIdRoute,
  getRcsBrandsRoute,
  patchRcsBrandsIdRoute,
  postRcsBrandsIdSubmitRoute,
  postRcsBrandsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rcsBrandsHandler = app
  .openapi(getRcsBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRcsBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRcsBrandsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRcsBrandsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRcsBrandsIdSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
