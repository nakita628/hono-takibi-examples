import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101StartImportTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsPoseidonServiceV20151101StartImportTaskHandler = app.openapi(
  postXAmzTargetAWSPoseidonServiceV20151101StartImportTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
