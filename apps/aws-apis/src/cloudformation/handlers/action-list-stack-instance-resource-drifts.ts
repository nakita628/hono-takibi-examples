import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListStackInstanceResourceDriftsRoute,
  postActionListStackInstanceResourceDriftsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionListStackInstanceResourceDriftsHandler = app
  .openapi(getActionListStackInstanceResourceDriftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListStackInstanceResourceDriftsRoute, (c) => {
    throw new Error('Not implemented')
  })
