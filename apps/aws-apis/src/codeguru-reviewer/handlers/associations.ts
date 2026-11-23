import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAssociationsAssociationArnRoute,
  getAssociationsAssociationArnRoute,
  getAssociationsRoute,
  postAssociationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const associationsHandler = app
  .openapi(postAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssociationsAssociationArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAssociationsAssociationArnRoute, (c) => {
    throw new Error('Not implemented')
  })
