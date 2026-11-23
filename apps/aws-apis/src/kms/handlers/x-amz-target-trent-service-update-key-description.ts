import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceUpdateKeyDescriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceUpdateKeyDescriptionHandler = app.openapi(
  postXAmzTargetTrentServiceUpdateKeyDescriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
