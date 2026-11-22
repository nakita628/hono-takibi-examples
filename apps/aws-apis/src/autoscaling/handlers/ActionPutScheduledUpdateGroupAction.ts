import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionPutScheduledUpdateGroupActionRoute,
  postActionPutScheduledUpdateGroupActionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionPutScheduledUpdateGroupActionHandler = app
  .openapi(getActionPutScheduledUpdateGroupActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutScheduledUpdateGroupActionRoute, (c) => {
    throw new Error('Not implemented')
  })
