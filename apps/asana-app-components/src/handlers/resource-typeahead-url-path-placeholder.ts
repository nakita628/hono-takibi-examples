import { OpenAPIHono } from '@hono/zod-openapi'
import { getResourceTypeaheadUrlPathPlaceholderRoute } from '../routes'

const app = new OpenAPIHono()

export const resourceTypeaheadUrlPathPlaceholderHandler = app.openapi(
  getResourceTypeaheadUrlPathPlaceholderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
