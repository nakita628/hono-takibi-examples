import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPostsDepartmentsTypeRoute,
  getApiPostsGovernmentPostsRoute,
  getApiPostsOppositionPostsRoute,
  getApiPostsSpeakerAndDeputiesForDateRoute,
  getApiPostsSpokespersonsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const postsHandler = app
  .openapi(getApiPostsDepartmentsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPostsGovernmentPostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPostsOppositionPostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPostsSpeakerAndDeputiesForDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPostsSpokespersonsRoute, (c) => {
    throw new Error('Not implemented')
  })
