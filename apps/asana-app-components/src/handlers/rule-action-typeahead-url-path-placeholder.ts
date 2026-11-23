import { OpenAPIHono } from '@hono/zod-openapi'
import { getRuleActionTypeaheadUrlPathPlaceholderRoute } from '../routes'

const app = new OpenAPIHono()

export const ruleActionTypeaheadUrlPathPlaceholderHandler = app.openapi(
  getRuleActionTypeaheadUrlPathPlaceholderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
