import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftUpdateFleetPortSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftUpdateFleetPortSettingsHandler = app.openapi(
  postXAmzTargetGameLiftUpdateFleetPortSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
