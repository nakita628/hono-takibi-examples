import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetSMSSandboxAccountStatusRoute,
  postActionGetSMSSandboxAccountStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetSMSSandboxAccountStatusHandler = app
  .openapi(getActionGetSMSSandboxAccountStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetSMSSandboxAccountStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
