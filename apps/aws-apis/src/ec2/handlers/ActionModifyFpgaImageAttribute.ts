import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyFpgaImageAttributeRoute,
  postActionModifyFpgaImageAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyFpgaImageAttributeHandler = app
  .openapi(getActionModifyFpgaImageAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyFpgaImageAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
