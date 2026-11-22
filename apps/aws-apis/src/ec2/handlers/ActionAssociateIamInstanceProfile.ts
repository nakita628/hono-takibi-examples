import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAssociateIamInstanceProfileRoute,
  postActionAssociateIamInstanceProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAssociateIamInstanceProfileHandler = app
  .openapi(getActionAssociateIamInstanceProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssociateIamInstanceProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
