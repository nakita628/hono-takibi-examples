import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribePrincipalIdFormatRoute,
  postActionDescribePrincipalIdFormatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribePrincipalIdFormatHandler = app
  .openapi(getActionDescribePrincipalIdFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribePrincipalIdFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
