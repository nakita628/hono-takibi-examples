import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceCreateLocationFsxOntapRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceCreateLocationFsxOntapHandler = app.openapi(
  postXAmzTargetFmrsServiceCreateLocationFsxOntapRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
