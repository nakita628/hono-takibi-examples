import { OpenAPIHono } from '@hono/zod-openapi'
import { debuginfoV1alpha1DebuginfoServiceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', debuginfoV1alpha1DebuginfoServiceHandler)

export default app
