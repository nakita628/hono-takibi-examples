import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionSetRulePrioritiesRoute, postActionSetRulePrioritiesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionSetRulePrioritiesHandler = app
  .openapi(getActionSetRulePrioritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetRulePrioritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
