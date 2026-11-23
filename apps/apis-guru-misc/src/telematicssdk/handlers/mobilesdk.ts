import { OpenAPIHono } from '@hono/zod-openapi'
import { getMobilesdkStageTrackGetTrackV1Route } from '../routes'

const app = new OpenAPIHono()

export const mobilesdkHandler = app.openapi(getMobilesdkStageTrackGetTrackV1Route, (c) => {
  throw new Error('Not implemented')
})
