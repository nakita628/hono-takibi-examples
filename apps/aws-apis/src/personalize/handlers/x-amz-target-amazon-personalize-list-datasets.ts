import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListDatasetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeListDatasetsHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListDatasetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
