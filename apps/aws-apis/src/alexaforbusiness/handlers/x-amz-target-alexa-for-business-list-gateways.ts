import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessListGatewaysRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessListGatewaysHandler = app.openapi(
  postXAmzTargetAlexaForBusinessListGatewaysRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
