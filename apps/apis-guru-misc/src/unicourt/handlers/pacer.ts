import { OpenAPIHono } from '@hono/zod-openapi'
import { getPacerImportCaseByCourtUsingCaseNumberRoute } from '../routes'

const app = new OpenAPIHono()

export const pacerHandler = app.openapi(getPacerImportCaseByCourtUsingCaseNumberRoute, (c) => {
  throw new Error('Not implemented')
})
