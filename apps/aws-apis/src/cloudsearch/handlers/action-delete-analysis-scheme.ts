import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteAnalysisSchemeRoute, postActionDeleteAnalysisSchemeRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteAnalysisSchemeHandler = app
  .openapi(getActionDeleteAnalysisSchemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteAnalysisSchemeRoute, (c) => {
    throw new Error('Not implemented')
  })
