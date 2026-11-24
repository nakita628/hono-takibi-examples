import { OpenAPIHono } from '@hono/zod-openapi'

const app = new OpenAPIHono()

export const api = app

export default app
