import { OpenAPIHono } from '@hono/zod-openapi'
import { getNrlmsise00Route } from '../routes'

const app = new OpenAPIHono()

export const nrlmsise00Handler = app.openapi(getNrlmsise00Route, (c) => {
  throw new Error('Not implemented')
})
