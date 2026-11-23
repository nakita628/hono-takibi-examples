import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVrfsIdRoute,
  getVrfsIdIpsRoute,
  getVrfsIdRoute,
  getVrfsIdRoutesRoute,
  getVrfsVrfIdIpsIdRoute,
  postVrfsIdRoutesRoute,
  putVrfsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vrfsHandler = app
  .openapi(deleteVrfsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVrfsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVrfsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVrfsIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVrfsVrfIdIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVrfsIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVrfsIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
