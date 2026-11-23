import { OpenAPIHono } from '@hono/zod-openapi'
import { postMorphableTargetsRoute } from '../routes'

const app = new OpenAPIHono()

export const morphableTargetsHandler = app.openapi(postMorphableTargetsRoute, (c) => {
  throw new Error('Not implemented')
})
