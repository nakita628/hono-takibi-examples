import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApi1PartnersIdRoute,
  getApi1PartnersIdRoute,
  getApi1PartnersRoute,
  postApi1PartnersRoute,
  putApi1PartnersCodeCodeRoute,
  putApi1PartnersIdRoute,
  putApi1PartnersUpsertByCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const partnersHandler = app
  .openapi(getApi1PartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1PartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1PartnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1PartnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1PartnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1PartnersCodeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1PartnersUpsertByCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
