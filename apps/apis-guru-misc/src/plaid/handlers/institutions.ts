import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postInstitutionsGetByIdRoute,
  postInstitutionsGetRoute,
  postInstitutionsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const institutionsHandler = app
  .openapi(postInstitutionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstitutionsGetByIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstitutionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
