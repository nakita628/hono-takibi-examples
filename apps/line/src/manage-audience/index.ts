import { OpenAPIHono } from '@hono/zod-openapi'
import { manageAudienceBlobHandler, manageAudienceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', manageAudienceHandler).route('/', manageAudienceBlobHandler)

export default app
