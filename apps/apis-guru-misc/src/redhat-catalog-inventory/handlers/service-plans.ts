import { OpenAPIHono } from '@hono/zod-openapi'
import { getServicePlansIdRoute, getServicePlansRoute } from '../routes'

const app = new OpenAPIHono()

export const servicePlansHandler = app
  .openapi(getServicePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePlansIdRoute, (c) => {
    throw new Error('Not implemented')
  })
