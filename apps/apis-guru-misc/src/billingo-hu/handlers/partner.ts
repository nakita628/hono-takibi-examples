import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePartnersIdRoute,
  getPartnersIdRoute,
  getPartnersRoute,
  postPartnersRoute,
  putPartnersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const partnerHandler = app
  .openapi(getPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePartnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPartnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPartnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
