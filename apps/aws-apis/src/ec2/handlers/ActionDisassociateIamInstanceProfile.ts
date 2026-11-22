import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisassociateIamInstanceProfileRoute,
  postActionDisassociateIamInstanceProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDisassociateIamInstanceProfileHandler = app
  .openapi(getActionDisassociateIamInstanceProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisassociateIamInstanceProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
