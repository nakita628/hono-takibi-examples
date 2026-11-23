import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeFpgaImageAttributeRoute,
  postActionDescribeFpgaImageAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeFpgaImageAttributeHandler = app
  .openapi(getActionDescribeFpgaImageAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeFpgaImageAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
