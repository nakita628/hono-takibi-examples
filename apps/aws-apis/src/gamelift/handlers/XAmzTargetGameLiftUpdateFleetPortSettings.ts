import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftUpdateFleetPortSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftUpdateFleetPortSettingsHandler = app.openapi(
  postXAmzTargetGameLiftUpdateFleetPortSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
