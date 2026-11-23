import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersRoute,
  putAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountNameVtexcommercestableComBrHandler = app
  .openapi(postAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
