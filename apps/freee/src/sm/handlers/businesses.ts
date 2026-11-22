import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBusinessesIdRoute,
  getBusinessesRoute,
  patchBusinessesIdRoute,
  postBusinessesIdCancellationRoute,
  postBusinessesIdCloseRoute,
  postBusinessesIdReopenRoute,
  postBusinessesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const businessesHandler = app
  .openapi(getBusinessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBusinessesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessesIdCancellationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessesIdCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessesIdReopenRoute, (c) => {
    throw new Error('Not implemented')
  })
