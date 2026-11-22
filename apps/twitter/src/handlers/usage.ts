import { OpenAPIHono } from '@hono/zod-openapi'
import { get2UsageCreditsRoute, get2UsageTweetsRoute } from '../routes'

const app = new OpenAPIHono()

export const usageHandler = app
  .openapi(get2UsageCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsageTweetsRoute, (c) => {
    throw new Error('Not implemented')
  })
