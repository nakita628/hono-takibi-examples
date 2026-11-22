import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDefineAnalysisSchemeRoute, postActionDefineAnalysisSchemeRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDefineAnalysisSchemeHandler = app
  .openapi(getActionDefineAnalysisSchemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDefineAnalysisSchemeRoute, (c) => {
    throw new Error('Not implemented')
  })
