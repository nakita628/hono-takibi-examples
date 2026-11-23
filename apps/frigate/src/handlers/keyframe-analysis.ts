import { OpenAPIHono } from '@hono/zod-openapi'
import { getKeyframeAnalysisRoute } from '../routes'

const app = new OpenAPIHono()

export const keyframeAnalysisHandler = app.openapi(getKeyframeAnalysisRoute, (c) => {
  throw new Error('Not implemented')
})
