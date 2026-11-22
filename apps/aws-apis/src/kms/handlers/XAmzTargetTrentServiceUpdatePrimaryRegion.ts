import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceUpdatePrimaryRegionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceUpdatePrimaryRegionHandler = app.openapi(
  postXAmzTargetTrentServiceUpdatePrimaryRegionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
