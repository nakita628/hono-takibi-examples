import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetRelationalDatabaseMasterUserPasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetRelationalDatabaseMasterUserPasswordHandler =
  app.openapi(postXAmzTargetLightsail20161128GetRelationalDatabaseMasterUserPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
