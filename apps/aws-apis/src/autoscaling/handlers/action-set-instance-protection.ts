import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSetInstanceProtectionRoute,
  postActionSetInstanceProtectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionSetInstanceProtectionHandler = app
  .openapi(getActionSetInstanceProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetInstanceProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
