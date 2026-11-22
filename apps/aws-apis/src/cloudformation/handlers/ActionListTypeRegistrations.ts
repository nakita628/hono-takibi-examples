import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListTypeRegistrationsRoute,
  postActionListTypeRegistrationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionListTypeRegistrationsHandler = app
  .openapi(getActionListTypeRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListTypeRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
