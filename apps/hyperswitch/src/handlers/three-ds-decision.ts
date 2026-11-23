import { OpenAPIHono } from '@hono/zod-openapi'
import { postThreeDsDecisionExecuteRoute } from '../routes'

const app = new OpenAPIHono()

export const threeDsDecisionHandler = app.openapi(postThreeDsDecisionExecuteRoute, (c) => {
  throw new Error('Not implemented')
})
