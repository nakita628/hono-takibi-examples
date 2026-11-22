import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePartnersIdRoute,
  getPartnersRoute,
  postPartnersIdRoute,
  postPartnersRoute,
  putPartnersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const partnersHandler = app
  .openapi(getPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePartnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPartnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPartnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
