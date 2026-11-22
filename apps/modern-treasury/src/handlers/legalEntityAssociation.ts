import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiLegalEntityAssociationsIdRoute,
  postApiLegalEntityAssociationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const legalEntityAssociationHandler = app
  .openapi(postApiLegalEntityAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLegalEntityAssociationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
