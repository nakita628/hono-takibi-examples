import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisassociateIamInstanceProfileRoute,
  postActionDisassociateIamInstanceProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDisassociateIamInstanceProfileHandler = app
  .openapi(getActionDisassociateIamInstanceProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisassociateIamInstanceProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
