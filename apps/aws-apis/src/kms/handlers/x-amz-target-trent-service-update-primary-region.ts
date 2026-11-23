import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceUpdatePrimaryRegionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceUpdatePrimaryRegionHandler = app.openapi(
  postXAmzTargetTrentServiceUpdatePrimaryRegionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
