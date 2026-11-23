import { OpenAPIHono } from '@hono/zod-openapi'
import { getUpgradeRoute, postUpgradeRoute } from '../routes'

const app = new OpenAPIHono()

export const upgradeHandler = app
  .openapi(getUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
