import { OpenAPIHono } from '@hono/zod-openapi'
import { locationsHandler, placeActionTypeMetadataHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', placeActionTypeMetadataHandler).route('/', locationsHandler)

export default app
