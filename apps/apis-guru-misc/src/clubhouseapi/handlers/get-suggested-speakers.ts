import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetSuggestedSpeakersRoute } from '../routes'

const app = new OpenAPIHono()

export const getSuggestedSpeakersHandler = app.openapi(postGetSuggestedSpeakersRoute, (c) => {
  throw new Error('Not implemented')
})
