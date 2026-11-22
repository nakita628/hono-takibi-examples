import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetCoipPoolUsageRoute, postActionGetCoipPoolUsageRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetCoipPoolUsageHandler = app
  .openapi(getActionGetCoipPoolUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetCoipPoolUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
