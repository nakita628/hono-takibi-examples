import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionResetFpgaImageAttributeRoute,
  postActionResetFpgaImageAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionResetFpgaImageAttributeHandler = app
  .openapi(getActionResetFpgaImageAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionResetFpgaImageAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
