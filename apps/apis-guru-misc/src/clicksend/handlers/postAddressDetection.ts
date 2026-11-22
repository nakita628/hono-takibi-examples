import { OpenAPIHono } from '@hono/zod-openapi'
import { postPostLettersDetectAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const postAddressDetectionHandler = app.openapi(postPostLettersDetectAddressRoute, (c) => {
  throw new Error('Not implemented')
})
